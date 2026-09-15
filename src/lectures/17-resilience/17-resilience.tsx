import type { Lecture } from '../types'
import { Lecture17ResilienceNotes } from './17-notes'
import { slides } from './slides'

export const lecture17Resilience: Lecture = {
    id: 'resilience',
    number: 17,
    title: 'Защита от сбоев',
    summary: 'Инженерные и процессные меры защиты от основных классов рисков.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture17ResilienceNotes,
    slides
}
