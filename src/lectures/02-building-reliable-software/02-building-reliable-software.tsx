import type { Lecture } from '../types'
import { Lecture02BuildingReliableSoftwareNotes } from './02-notes'
import { slides } from './slides'

export const lecture02BuildingReliableSoftware: Lecture = {
    id: 'building-reliable-software',
    number: 2,
    title: 'Как создавать надёжный софт',
    summary:
        'Предотвращение сбоев, быстрое восстановление и инженерные принципы SRE.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture02BuildingReliableSoftwareNotes,
    slides
}
