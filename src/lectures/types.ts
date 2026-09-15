import type { ComponentType, ReactNode } from 'react'

export type Lecture = {
    id: string
    number: number
    title: string
    summary: string
    duration: string
    status: 'available' | 'planned'
    Notes: ComponentType
    slides?: ReadonlyArray<ReactNode>
}
