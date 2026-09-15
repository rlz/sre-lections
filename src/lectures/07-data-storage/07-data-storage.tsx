import type { Lecture } from '../types'
import { Lecture07DataStorageNotes } from './07-notes'
import { slides } from './slides'

export const lecture07DataStorage: Lecture = {
    id: 'data-storage',
    number: 7,
    title: 'Хранение данных',
    summary:
        'Типы баз данных, модели доступа, индексы, локальность данных и ACID/BASE.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture07DataStorageNotes,
    slides
}
