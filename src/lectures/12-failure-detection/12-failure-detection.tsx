import type { Lecture } from '../types'
import { Lecture12FailureDetectionNotes } from './12-notes'
import { slides } from './slides'

export const lecture12FailureDetection: Lecture = {
    id: 'failure-detection',
    number: 12,
    title: 'Детектирование сбоев',
    summary: 'Прямые и косвенные сигналы, RED-метрики и учёт сезонности.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture12FailureDetectionNotes,
    slides
}
