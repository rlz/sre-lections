import { css } from '@emotion/react'
import { useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture01ReliabilityBasicsSlide06NinesWithoutContext() {
    const theme = useSlidesTheme()
    const statement = css({ margin: 0, fontSize: '2.4em', fontWeight: 800 })
    const questions = css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem 3rem',
        maxWidth: '76rem',
        marginTop: '2.4rem',
        padding: 0,
        listStyle: 'none'
    })
    const question = css({
        paddingTop: '1rem',
        borderTop: '2px solid',
        fontSize: '1.1em'
    })
    const questionStyle = {
        borderTopColor: theme.colors['accent-2'],
        color: theme.colors.muted
    }

    return (
        <LectureContentSlide
            number={1}
            title="Девятки без контекста ничего не обещают"
        >
            <p css={[statement, { color: theme.colors['accent-1'] }]}>99,9 %</p>
            <ul css={questions}>
                <li css={[question, questionStyle]}>Чего именно?</li>
                <li css={[question, questionStyle]}>Как это посчитали?</li>
                <li css={[question, questionStyle]}>За какой период?</li>
                <li css={[question, questionStyle]}>
                    Это прошлый результат или обещание на будущее?
                </li>
            </ul>
        </LectureContentSlide>
    )
}
