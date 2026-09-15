import type { Lecture } from '../types'
import { Lecture02ServiceLevelObjectivesNotes } from './02-notes'

export const lecture02ServiceLevelObjectives: Lecture = {
    id: 'service-level-objectives',
    number: 2,
    title: 'SLI, SLO и error budget',
    summary:
        'Как выбрать полезные индикаторы, поставить реалистичные цели и использовать бюджет ошибок.',
    duration: '90 минут',
    status: 'planned',
    Notes: Lecture02ServiceLevelObjectivesNotes
}
