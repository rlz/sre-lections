import { lecture01WhatIsSre } from './01-what-is-sre/01-what-is-sre'
import { lecture02ServiceLevelObjectives } from './02-service-level-objectives/02-service-level-objectives'
import { lecture03MonitoringAndAlerting } from './03-monitoring-and-alerting/03-monitoring-and-alerting'
import type { Lecture } from './types'

export type { Lecture } from './types'

export const lectures: ReadonlyArray<Lecture> = [
    lecture01WhatIsSre,
    lecture02ServiceLevelObjectives,
    lecture03MonitoringAndAlerting
]

export function findLecture(id: string | undefined) {
    return lectures.find((lecture) => lecture.id === id)
}
