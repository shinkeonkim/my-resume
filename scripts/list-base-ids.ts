import { experienceEntities } from '../src/resume/base/experiences'
import { projectEntities } from '../src/resume/base/projects'

const args = process.argv.slice(2)
const format = args.find((a) => a.startsWith('--format='))?.split('=')[1] ?? 'json'

const payload = {
  schema: 'ResumeBaseIds.v1',
  experiences: experienceEntities.map((e) => ({
    id: e.id,
    company: e.company,
    roleTitle: e.roleTitle,
    period: e.period,
  })),
  projects: projectEntities.map((p) => ({
    id: p.id,
    title: p.title,
    period: p.period,
  })),
}

if (format === 'ids') {
  process.stdout.write(
    [...payload.experiences.map((e) => e.id), ...payload.projects.map((p) => p.id)].join('\n'),
  )
} else {
  process.stdout.write(JSON.stringify(payload, null, 2))
}
