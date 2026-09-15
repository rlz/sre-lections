import type { Lecture } from '../types'
import { Lecture03MonitoringAndAlertingNotes } from './03-notes'

export const lecture03MonitoringAndAlerting: Lecture = {
    id: 'monitoring-and-alerting',
    number: 3,
    title: 'Наблюдаемость и алертинг',
    summary:
        'Сигналы, симптомы, причины и алерты, которые помогают дежурному действовать.',
    duration: '90 минут',
    status: 'planned',
    Notes: Lecture03MonitoringAndAlertingNotes
}
