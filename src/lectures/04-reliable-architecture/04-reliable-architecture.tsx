import type { Lecture } from '../types'
import { Lecture04ReliableArchitectureNotes } from './04-notes'
import { slides } from './slides'

export const lecture04ReliableArchitecture: Lecture = {
    id: 'reliable-architecture',
    number: 4,
    title: 'Архитектура надёжных сервисов',
    summary:
        'Важные вещи, о которых надо помнить при проектировании архитектуры.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture04ReliableArchitectureNotes,
    slides
}
