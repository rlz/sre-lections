import type { ReactNode } from 'react'

type KeyPointProps = {
    title: string
    children: ReactNode
}

export function KeyPoint({ title, children }: KeyPointProps) {
    return (
        <aside className="key-point">
            <p className="key-point__title">{title}</p>
            <div>{children}</div>
        </aside>
    )
}
