import type { Lecture } from '../types'
import { Lecture18TeamProcessesNotes } from './18-notes'
import { slides } from './slides'

export const lecture18TeamProcesses: Lecture = {
    id: 'team-processes',
    number: 18,
    title: 'Процессы в команде',
    summary:
        'Дежурства, документация, обучение и регулярная работа с инцидентами.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture18TeamProcessesNotes,
    slides
}
