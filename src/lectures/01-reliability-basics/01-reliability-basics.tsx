import type { Lecture } from '../types'
import { Lecture01ReliabilityBasicsNotes } from './01-notes'
import { slides } from './slides'

export const lecture01ReliabilityBasics: Lecture = {
    id: 'reliability-basics',
    number: 1,
    title: 'Основы надёжности',
    summary:
        'Что такое надёжность и доступность, почему их измеряют и от чего они зависят.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture01ReliabilityBasicsNotes,
    slides
}
