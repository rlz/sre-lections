import type { Lecture } from '../types'
import { Lecture05MicroservicesAndOperationsNotes } from './05-notes'
import { slides } from './slides'

export const lecture05MicroservicesAndOperations: Lecture = {
    id: 'microservices-and-operations',
    number: 5,
    title: 'Монолиты, микросервисы и эксплуатация',
    summary:
        'Рестарты, совместимость, диагностика и цена распределённой архитектуры.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture05MicroservicesAndOperationsNotes,
    slides
}
