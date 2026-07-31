/**
 * export-resume-json.ts
 *
 * Extracts every piece of resume content from `src/resume/base/**` (plus
 * section labels from `src/composables/useLocale.ts`) into a single JSON
 * snapshot that is easy for an LLM to consume in one shot.
 *
 * Usage:
 *   bun scripts/export-resume-json.ts                # -> writes resume-data.json in project root
 *   bun scripts/export-resume-json.ts --out=snap.json
 *   bun scripts/export-resume-json.ts --stdout       # print JSON to stdout, do not write a file
 *   bun scripts/export-resume-json.ts --minify       # no pretty-print
 *   bun scripts/export-resume-json.ts --locale=ko    # keep only ko strings (default: both)
 *   bun scripts/export-resume-json.ts --help
 *
 * Fallbacks when bun is not installed:
 *   npx tsx scripts/export-resume-json.ts
 *
 * The output file is deterministic given the source files, so it can be
 * committed and diffed. Regenerate whenever the resume source changes so
 * the LLM sees the current state.
 */

import { writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))

import {
  experienceEntities,
  projectEntities,
  introductions,
  skills,
  educations,
  awards,
  certificates,
  activities,
  timelineRange,
  timelineItems,
  profileText,
  profileContact,
} from '../src/resume/base'
import { messages } from '../src/composables/useLocale'
import type { Locale } from '../src/resume/base/types'

// ---------- CLI parsing ---------------------------------------------------

interface CliOptions {
  outPath: string | null
  useStdout: boolean
  minify: boolean
  locale: Locale | 'both'
  showHelp: boolean
}

function parseCli(argv: string[]): CliOptions {
  const opts: CliOptions = {
    outPath: null,
    useStdout: false,
    minify: false,
    locale: 'both',
    showHelp: false,
  }
  for (const arg of argv) {
    if (arg === '--help' || arg === '-h') opts.showHelp = true
    else if (arg === '--stdout') opts.useStdout = true
    else if (arg === '--minify') opts.minify = true
    else if (arg.startsWith('--out=')) opts.outPath = arg.slice('--out='.length)
    else if (arg.startsWith('--locale=')) {
      const raw = arg.slice('--locale='.length)
      if (raw === 'ko' || raw === 'en' || raw === 'both') opts.locale = raw
      else {
        process.stderr.write(`[export-resume-json] Unknown --locale value: ${raw}\n`)
        process.exit(2)
      }
    } else {
      process.stderr.write(`[export-resume-json] Unknown argument: ${arg}\n`)
      process.exit(2)
    }
  }
  return opts
}

function printHelp(): void {
  process.stdout.write(
    [
      'Usage: bun scripts/export-resume-json.ts [options]',
      '',
      'Options:',
      '  --out=<path>       Write JSON to <path> (default: ./resume-data.json)',
      '  --stdout           Write JSON to stdout instead of a file',
      '  --minify           Emit compact JSON (default: 2-space pretty print)',
      '  --locale=<ko|en|both>  Restrict locale-scoped fields (default: both)',
      '  -h, --help         Show this help',
      '',
    ].join('\n'),
  )
}

// ---------- Locale filtering ---------------------------------------------

type Localized<T> = Record<Locale, T>

function pickLocales<T>(data: Localized<T>, locale: Locale | 'both'): Partial<Localized<T>> {
  if (locale === 'both') return data
  return { [locale]: data[locale] } as Partial<Localized<T>>
}

// ---------- Snapshot assembly --------------------------------------------

function buildSnapshot(locale: Locale | 'both') {
  const experiences = experienceEntities.map((e) => ({
    id: e.id,
    company: pickLocales(e.company, locale),
    roleTitle: pickLocales(e.roleTitle, locale),
    period: e.period,
    techStack: e.techStack ?? [],
    details: pickLocales(e.details, locale),
  }))

  const projects = projectEntities.map((p) => ({
    id: p.id,
    title: pickLocales(p.title, locale),
    period: p.period,
    techStack: p.techStack,
    details: pickLocales(p.details, locale),
    links: p.links ?? [],
  }))

  const stats = {
    experienceCount: experiences.length,
    projectCount: projects.length,
    activityCount: (activities.ko ?? []).length,
    educationCount: (educations.ko ?? []).length,
    awardCount: (awards.ko ?? []).length,
    certificateCount: (certificates.ko ?? []).length,
    timelineItemCount: (timelineItems.ko ?? []).length,
    skillCategoryCount: Object.keys(skills.ko?.skills ?? {}).length,
    skillDescriptionCount: (skills.ko?.skill_descriptions ?? []).length,
  }

  return {
    schema: 'ResumeSnapshot.v1',
    generatedAt: new Date().toISOString(),
    source: {
      note: 'Auto-generated from src/resume/base/**/*.ts and src/composables/useLocale.ts. Do not edit by hand.',
      regenerate: 'bun scripts/export-resume-json.ts   # or: npx tsx scripts/export-resume-json.ts',
    },
    localeFilter: locale,
    profile: {
      text: pickLocales(profileText, locale),
      contact: profileContact,
    },
    labels: pickLocales(messages, locale),
    introductions: pickLocales(introductions, locale),
    timeline: {
      range: {
        minDate: timelineRange.minDate.toISOString(),
        maxDate: timelineRange.maxDate.toISOString(),
      },
      items: pickLocales(timelineItems, locale),
    },
    educations: pickLocales(educations, locale),
    skills: pickLocales(skills, locale),
    experiences,
    projects,
    activities: pickLocales(activities, locale),
    awards: pickLocales(awards, locale),
    certificates: pickLocales(certificates, locale),
    stats,
  }
}

// ---------- Main ---------------------------------------------------------

function main(): void {
  const opts = parseCli(process.argv.slice(2))
  if (opts.showHelp) {
    printHelp()
    return
  }

  const snapshot = buildSnapshot(opts.locale)
  const json = opts.minify ? JSON.stringify(snapshot) : JSON.stringify(snapshot, null, 2)

  if (opts.useStdout) {
    process.stdout.write(json)
    if (!opts.minify) process.stdout.write('\n')
    return
  }

  const projectRoot = resolve(scriptDir, '..')
  const targetPath = opts.outPath
    ? resolve(process.cwd(), opts.outPath)
    : resolve(projectRoot, 'resume-data.json')

  mkdirSync(dirname(targetPath), { recursive: true })
  writeFileSync(targetPath, json + (opts.minify ? '' : '\n'), 'utf-8')

  const rel = targetPath.startsWith(projectRoot)
    ? targetPath.slice(projectRoot.length + 1)
    : targetPath
  process.stderr.write(
    [
      `[export-resume-json] Wrote ${json.length.toLocaleString()} bytes to ${rel}`,
      `  locale filter: ${opts.locale}`,
      `  experiences=${snapshot.stats.experienceCount}` +
        ` projects=${snapshot.stats.projectCount}` +
        ` activities=${snapshot.stats.activityCount}` +
        ` educations=${snapshot.stats.educationCount}` +
        ` awards=${snapshot.stats.awardCount}` +
        ` certificates=${snapshot.stats.certificateCount}`,
      '',
    ].join('\n'),
  )
}

main()
