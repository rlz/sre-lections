import type { Lecture } from '../types'
import { Lecture04ReliableArchitectureNotes } from './04-notes'
import { slides } from './slides'

export const lecture04ReliableArchitecture: Lecture = {
    id: 'reliable-architecture',
    number: 4,
    title: 'Архитектура надёжных сервисов',
    summary:
        'Зависимости, лимиты, исчерпаемые ресурсы и реакция на аномальную нагрузку.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture04ReliableArchitectureNotes,
    slides
}
