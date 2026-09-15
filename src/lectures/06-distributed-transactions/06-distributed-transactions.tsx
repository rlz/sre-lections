import type { Lecture } from '../types'
import { Lecture06DistributedTransactionsNotes } from './06-notes'
import { slides } from './slides'

export const lecture06DistributedTransactions: Lecture = {
    id: 'distributed-transactions',
    number: 6,
    title: 'Распределённые транзакции',
    summary:
        'Двухфазный коммит, саги, идемпотентность и оркестрация процессов.',
    duration: '90 минут',
    status: 'available',
    Notes: Lecture06DistributedTransactionsNotes,
    slides
}
