import type { Lecture } from '../types'
import { Lecture14ServiceLevelsNotes } from './14-notes'
import { slides } from './slides'

export const lecture14ServiceLevels: Lecture = {
    id: 'service-levels',
    number: 14,
    title: 'SLI, SLO и SLA',
    summary:
        'Как определить ожидаемую надёжность и измерять успешность сервиса.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture14ServiceLevelsNotes,
    slides
}
