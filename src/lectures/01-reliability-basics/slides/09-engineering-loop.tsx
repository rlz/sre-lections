import { css } from '@emotion/react'
import { useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture01ReliabilityBasicsSlide09EngineeringLoop() {
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
        padding: '1.3rem',
        borderRadius: '0.8rem',
        fontSize: '1em',
        fontWeight: 700
    })
    const note = css({
        maxWidth: '72rem',
        margin: '1.8rem 0 0',
        fontSize: '0.9em'
    })
    const stepStyle = [step, theme.backgrounds.solid('dark')]

    return (
        <LectureContentSlide number={1} title="Как работать с надёжностью">
            <div css={loop}>
                <div css={stepStyle}>
                    Выбрать значимые ожидания пользователей
                </div>
                <div css={stepStyle}>Измерять их выполнение</div>
                <div css={stepStyle}>Находить существенные риски</div>
                <div css={stepStyle}>Менять систему и способ работы</div>
            </div>
            <p css={[note, { color: theme.colors.muted }]}>
                Нельзя оценить надёжность одним числом или заранее учесть все
                отказы. Каждый инженерный приём — компромисс для конкретного
                риска.
            </p>
        </LectureContentSlide>
    )
}
