import type { Lecture } from '../types'
import { Lecture02FailuresAndReliabilityPrinciplesNotes } from './02-notes'
import { slides } from './slides'

export const lecture02FailuresAndReliabilityPrinciples: Lecture = {
    id: 'failures-and-reliability-principles',
    number: 2,
    title: 'Сбои и принципы надёжности',
    summary:
        'Как предотвращать сбои, ограничивать их влияние, восстанавливаться после них и учиться на ошибках.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture02FailuresAndReliabilityPrinciplesNotes,
    slides
}
