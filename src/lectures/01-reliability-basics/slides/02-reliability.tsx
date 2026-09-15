import { css } from '@emotion/react'
import { useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture01ReliabilityBasicsSlide02Reliability() {
    const theme = useSlidesTheme()
    const definition = css({ maxWidth: '72rem', fontSize: '1.5em' })
    const terms = css({
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        marginTop: '2.5rem'
    })
    const term = css({
        padding: '1.25rem 1.4rem',
        borderRadius: '0.8rem',
        fontSize: '0.9em',
        fontWeight: 700
    })

    return (
        <LectureContentSlide number={1} title="Что такое надёжность">
            <p css={[definition, { color: theme.colors.muted }]}>
                Способность системы выполнять обещанную пользователю функцию в
                заданных условиях.
            </p>
            <div css={terms}>
                <div css={[term, theme.backgrounds.solid('neutral')]}>
                    Обещанная функция
                </div>
                <div css={[term, theme.backgrounds.solid('neutral')]}>
                    Заданные условия
                </div>
                <div css={[term, theme.backgrounds.solid('neutral')]}>
                    Нужный результат
                </div>
            </div>
        </LectureContentSlide>
    )
}
