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
        padding: '1.4rem',
        borderRadius: '0.8rem',
        fontSize: '1.05em',
        fontWeight: 700
    })
    const factorStyle = [factor, theme.backgrounds.solid('neutral')]

    return (
        <LectureContentSlide
            number={1}
            title="Надёжность зависит от всей системы"
        >
            <div css={factors}>
                <div css={factorStyle}>Архитектура, код, оборудование</div>
                <div css={factorStyle}>Объём и характер нагрузки</div>
                <div css={factorStyle}>Внешняя среда и партнёры</div>
                <div css={factorStyle}>Скорость и безопасность изменений</div>
                <div css={factorStyle}>Наблюдаемость и дежурства</div>
                <div css={factorStyle}>Люди, знания и процессы</div>
            </div>
        </LectureContentSlide>
    )
}
