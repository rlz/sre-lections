import type { Lecture } from '../types'
import { Lecture15FailureCausesAndTriggersNotes } from './15-notes'
import { slides } from './slides'

export const lecture15FailureCausesAndTriggers: Lecture = {
    id: 'failure-causes-and-triggers',
    number: 15,
    title: 'Причины и триггеры сбоев',
    summary: 'Как различать причины и триггеры и системно разбирать инциденты.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture15FailureCausesAndTriggersNotes,
    slides
}
