import type { Lecture } from '../types'
import { Lecture16IncidentResponseAndPostmortemsNotes } from './16-notes'
import { slides } from './slides'

export const lecture16IncidentResponseAndPostmortems: Lecture = {
    id: 'incident-response-and-postmortems',
    number: 16,
    title: 'Устранение сбоев и постмортемы',
    summary: 'Поиск эпицентра, стратегии восстановления и разбор инцидентов.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture16IncidentResponseAndPostmortemsNotes,
    slides
}
