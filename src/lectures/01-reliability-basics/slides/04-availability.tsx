import { css } from '@emotion/react'
import { useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture01ReliabilityBasicsSlide04Availability() {
    const theme = useSlidesTheme()
    const formula = css({
        maxWidth: '76rem',
        padding: '2rem 2.4rem',
        borderRadius: '0 1rem 1rem 0',
        fontSize: '2em',
        fontWeight: 800
    })
    const note = css({
        maxWidth: '65rem',
        margin: '2rem 0 0',
        fontSize: '1em'
    })

    return (
        <LectureContentSlide
            number={1}
            title="Доступность — результат договорённого измерения"
        >
            <div
                css={[
                    formula,
                    theme.backgrounds.solid('neutral'),
                    { borderLeft: `0.45rem solid ${theme.colors['accent-1']}` }
                ]}
            >
                Доступность — как услуга работала в прошлом периоде
            </div>
            <p css={[note, { color: theme.colors.muted }]}>
                Её можно считать по времени без нарушений, успешным операциям
                или взвешенным пользовательским сценариям. Метод выбирают до
                измерения.
            </p>
        </LectureContentSlide>
    )
}
