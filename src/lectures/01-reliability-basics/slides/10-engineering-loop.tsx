import { css } from '@emotion/react'
import { useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture01ReliabilityBasicsSlide10EngineeringLoop() {
    const theme = useSlidesTheme()
    const loop = css({
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '0.8rem',
        maxWidth: '76rem'
    })
    const step = css({
        display: 'flex',
        minHeight: '12rem',
        alignItems: 'flex-end',
        padding: theme.spacings.half,
        fontSize: '1em',
        fontWeight: 700
    })
    const note = css({
        maxWidth: '72rem',
        margin: '1.8rem 0 0',
        fontSize: '0.9em'
    })
    const stepStyles = [
        theme.backgrounds.gradient('accent-1'),
        theme.backgrounds.gradient('accent-2'),
        theme.backgrounds.gradient('accent-3'),
        theme.backgrounds.gradient('neutral')
    ]

    return (
        <LectureContentSlide number={1}>
            <h1
                css={{
                    maxWidth: '78%',
                    margin: '0 0 2.8rem',
                    color: theme.colors.textLight
                }}
            >
                Как работать с надёжностью
            </h1>
            <div css={loop}>
                <div css={[step, stepStyles[0]]}>
                    Выбрать значимые ожидания пользователей
                </div>
                <div css={[step, stepStyles[1]]}>Измерять их выполнение</div>
                <div css={[step, stepStyles[2]]}>
                    Находить существенные риски
                </div>
                <div css={[step, stepStyles[3]]}>
                    Менять систему и способ работы
                </div>
            </div>
            <p css={[note, { color: theme.colors.muted }]}>
                Нельзя оценить надёжность одним числом или заранее учесть все
                отказы. Каждый инженерный приём — компромисс для конкретного
                риска.
            </p>
        </LectureContentSlide>
    )
}
