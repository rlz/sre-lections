import type { Lecture } from '../types'
import { Lecture08ReplicationNotes } from './08-notes'
import { slides } from './slides'

export const lecture08Replication: Lecture = {
    id: 'replication',
    number: 8,
    title: 'Репликация данных',
    summary:
        'Цели репликации, лидер, лаг, консистентность и многомастерные схемы.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture08ReplicationNotes,
    slides
}
