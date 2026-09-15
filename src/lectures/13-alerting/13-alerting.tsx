import type { Lecture } from '../types'
import { Lecture13AlertingNotes } from './13-notes'
import { slides } from './slides'

export const lecture13Alerting: Lecture = {
    id: 'alerting',
    number: 13,
    title: 'Алертирование',
    summary: 'Пейджи, эскалации, дежурства и работа с несрочными сигналами.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture13AlertingNotes,
    slides
}
