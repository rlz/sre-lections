import type { Lecture } from '../types'
import { Lecture03DistributedSystemsNotes } from './03-notes'
import { slides } from './slides'

export const lecture03DistributedSystems: Lecture = {
    id: 'distributed-systems',
    number: 3,
    title: 'Распределённые системы',
    summary:
        'Консенсус, CAP/PACELC и практические компромиссы распределённой архитектуры.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture03DistributedSystemsNotes,
    slides
}
