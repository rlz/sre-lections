import type { Lecture } from '../types'
import { Lecture01WhatIsSreNotes } from './01-notes'
import { slides } from './slides'

export const lecture01WhatIsSre: Lecture = {
    id: 'what-is-sre',
    number: 1,
    title: 'Зачем нужен SRE',
    summary:
        'Стартовая лекция о роли надёжности в продукте, компромиссах и языке SRE.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture01WhatIsSreNotes,
    slides
}
