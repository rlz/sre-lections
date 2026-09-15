import type { Lecture } from '../types'
import { Lecture10MonitoringMetricsNotes } from './10-notes'
import { slides } from './slides'

export const lecture10MonitoringMetrics: Lecture = {
    id: 'monitoring-metrics',
    number: 10,
    title: 'Мониторинг: метрики',
    summary:
        'Назначение мониторинга, типы метрик и управление кардинальностью.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture10MonitoringMetricsNotes,
    slides
}
