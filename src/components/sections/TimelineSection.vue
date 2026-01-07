<script setup lang="ts">
import { computed } from 'vue'
import ResumeSectionLayout from '../ResumeSectionLayout.vue'
import { minDate, maxDate, timeLineItems } from '../data/timeline'
import type { TimelineSegment } from '../types/TimeLineItem'

// Basic date parsing and handling
const parseDate = (dateStr: string) => {
  return new Date(dateStr.substring(0, 7).replace('.', '-'))
}

// Determine min and max dates for the chart

const totalMonths =
  (maxDate.getFullYear() - minDate.getFullYear()) * 12 + (maxDate.getMonth() - minDate.getMonth())

const getLeftPosition = (dateStr: string) => {
  let date = parseDate(dateStr)
  // Handle 'Present' if passed, though usually for end dates
  if (dateStr === 'Present') date = new Date()

  const diffMonths =
    (date.getFullYear() - minDate.getFullYear()) * 12 + (date.getMonth() - minDate.getMonth())
  return (diffMonths / totalMonths) * 100
}

const getPositionStyle = (segment: TimelineSegment) => {
  const startDate = parseDate(segment.start)
  let endDate
  if (segment.end === 'Present') {
    endDate = new Date()
  } else {
    endDate = parseDate(segment.end)
  }

  if (segment.end === 'Present' && endDate > maxDate) endDate = maxDate

  const startMonthDiff =
    (startDate.getFullYear() - minDate.getFullYear()) * 12 +
    (startDate.getMonth() - minDate.getMonth())
  const durationMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth())

  // Ensure at least minimal width
  const durationParam = Math.max(durationMonths, 1)

  const left = (startMonthDiff / totalMonths) * 100
  const width = (durationParam / totalMonths) * 100

  return {
    left: `${left}%`,
    width: `${width}%`,
  }
}

const years = computed(() => {
  const result = []
  for (let y = minDate.getFullYear(); y <= maxDate.getFullYear(); y++) {
    result.push(y)
  }
  return result
})
</script>

<template>
  <ResumeSectionLayout title="Timeline">
    <div class="gantt-chart">
      <!-- Years Labels (Absolute Positioning to match grid) -->
      <div class="years-axis mb-2">
        <div
          v-for="year in years"
          :key="year"
          class="year-label"
          :style="{ left: `${getLeftPosition(year + '.01')}%` }"
        >
          {{ year }}
        </div>
      </div>

      <!-- Rows -->
      <div class="bars-container">
        <div v-for="item in timeLineItems" :key="item.id" class="gantt-row">
          <div class="row-track">
            <div
              v-for="(seg, idx) in item.segments"
              :key="idx"
              class="bar-wrapper"
              :style="getPositionStyle(seg)"
            >
              <div class="bar" :class="`is-${item.type}`" :title="`${item.name}`">
                <span
                  class="bar-label"
                  :style="{ paddingLeft: `${item.paddingLeft}px` }"
                  v-if="idx === 0"
                  >{{ item.name }}</span
                >
                <span class="bar-label" v-else>&nbsp;</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Precise Grid Lines -->
        <div class="grid-lines">
          <div
            v-for="year in years"
            :key="year"
            class="grid-line"
            :style="{ left: `${getLeftPosition(year + '.01')}%` }"
          ></div>
        </div>
      </div>
    </div>
  </ResumeSectionLayout>
</template>

<style scoped>
.gantt-chart {
  position: relative;
  width: 100%;
  overflow-x: auto;
  font-size: 0.8rem;
  padding-bottom: 2rem;
  background-color: #f9f9f9; /* Very light grey as requested */
  padding: 1rem;
  border-radius: 4px;
}

.years-axis {
  position: relative;
  height: 1.5rem;
  border-bottom: 1px solid #7a7a7a;
  margin-bottom: 0.5rem;
}

.year-label {
  position: absolute;
  transform: translateX(-50%); /* Center align on the year start mark */
  color: #4a4a4a; /* Dark text for contrast on light grey */
  font-size: 0.75rem;
  font-weight: bold;
}

.bars-container {
  position: relative;
  padding-top: 0.5rem;
}

.gantt-row {
  position: relative;
  height: 1.8rem;
  margin-bottom: 0.5rem;
}

.row-track {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2; /* Above grid lines */
}

.bar-wrapper {
  position: absolute;
  height: 100%;
}

.bar {
  height: 70%;
  border-radius: 4px;
  background-color: #dbdbdb;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  white-space: nowrap;
  overflow: visible;
  color: #fff;
  font-weight: bold; /* Keep bold white text */
  font-size: 0.75rem;
}

.bar-label {
  z-index: 10;
  background-color: transparent;
  padding: 0;
}

.bar.is-school {
  background-color: #7a7a7a;
} /* Medium Grey */
.bar.is-career {
  background-color: #4a4a4a;
} /* Dark Grey (Primary) */
.bar.is-activity {
  background-color: #9e9e9e;
} /* Lighter Grey */
.bar.is-project {
  background-color: #b5b5b5;
  color: #0a0a0a;
} /* Light Grey with dark text */

.grid-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.grid-line {
  position: absolute;
  top: 0;
  bottom: 0;
  border-left: 1px solid rgba(0, 0, 0, 0.1); /* Visible vertical line */
  height: 100%;
}
</style>
