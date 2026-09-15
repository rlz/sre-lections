import type { Lecture } from '../types'
import { Lecture11LoggingAndTracingNotes } from './11-notes'
import { slides } from './slides'

export const lecture11LoggingAndTracing: Lecture = {
    id: 'logging-and-tracing',
    number: 11,
    title: 'Мониторинг: логи и трассировка',
    summary:
        'Структурированные логи, семплирование и распределённая трассировка.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture11LoggingAndTracingNotes,
    slides
}
