import type { Lecture } from '../types'
import { Lecture19ClientApplicationsNotes } from './19-notes'
import { slides } from './slides'

export const lecture19ClientApplications: Lecture = {
    id: 'client-applications',
    number: 19,
    title: 'Надёжность клиентских приложений',
    summary:
        'Особенности мобильных и десктопных клиентов, совместимость и деградация.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture19ClientApplicationsNotes,
    slides
}
