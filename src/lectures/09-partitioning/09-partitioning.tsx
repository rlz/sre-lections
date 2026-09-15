import type { Lecture } from '../types'
import { Lecture09PartitioningNotes } from './09-notes'
import { slides } from './slides'

export const lecture09Partitioning: Lecture = {
    id: 'partitioning',
    number: 9,
    title: 'Партиционирование данных',
    summary: 'Распределение данных, роутинг, шарды и перебалансировка.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture09PartitioningNotes,
    slides
}
