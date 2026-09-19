import { css } from '@emotion/react'
import { useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture01ReliabilityBasicsSlide07ReliabilityFactors() {
    const theme = useSlidesTheme()
    const factors = css({
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        maxWidth: '76rem'
    })
    const factor = css({
        minHeight: '5.4rem',
        padding: theme.spacings.half,
        display: 'flex',
        alignItems: 'flex-end',
        fontSize: '1.05em',
        fontWeight: 700
    })
    const factorStyles = [
        theme.backgrounds.gradient('accent-1'),
        theme.backgrounds.gradient('accent-2'),
        theme.backgrounds.gradient('accent-3')
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
                Надёжность зависит от всей системы
            </h1>
            <div css={factors}>
                <div css={[factor, factorStyles[0]]}>
                    Архитектура, код, оборудование
                </div>
                <div css={[factor, factorStyles[1]]}>
                    Объём и характер нагрузки
                </div>
                <div css={[factor, factorStyles[2]]}>
                    Ресурсы и запас мощности
                </div>
                <div css={[factor, factorStyles[0]]}>
                    Внешняя среда и партнёры
                </div>
                <div css={[factor, factorStyles[1]]}>
                    Скорость и безопасность изменений
                </div>
                <div css={[factor, factorStyles[2]]}>
                    Наблюдаемость и дежурства
                </div>
                <div css={[factor, factorStyles[0]]}>
                    Люди, знания и процессы
                </div>
            </div>
        </LectureContentSlide>
    )
}
