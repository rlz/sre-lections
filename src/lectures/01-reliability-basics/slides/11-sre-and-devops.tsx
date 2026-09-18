import { css } from '@emotion/react'
import { useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture01ReliabilityBasicsSlide11SreAndDevops() {
    const theme = useSlidesTheme()
    const comparison = css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        maxWidth: '76rem'
    })
    const column = css({ padding: '2rem', borderRadius: '1rem' })
    const label = css({
        margin: 0,
        fontSize: '0.6em',
        fontWeight: 800,
        textTransform: 'uppercase'
    })
    const text = css({ margin: '1rem 0 0', fontSize: '1.2em' })
    const panel = [column, theme.backgrounds.solid('light'), theme.shadows.low]

    return (
        <LectureContentSlide number={1}>
            <h1
                css={{
                    maxWidth: '78%',
                    margin: '0 0 2.8rem',
                    color: theme.colors.textLight
                }}
            >
                SRE и DevOps
            </h1>
            <div css={comparison}>
                <section css={panel}>
                    <p css={[label, { color: theme.colors['accent-1'] }]}>
                        DevOps
                    </p>
                    <p css={[text, { color: theme.colors.muted }]}>
                        Совместная ответственность за быструю и безопасную
                        поставку ценности пользователю
                    </p>
                </section>
                <section css={panel}>
                    <p css={[label, { color: theme.colors['accent-1'] }]}>
                        SRE
                    </p>
                    <p css={[text, { color: theme.colors.muted }]}>
                        Инженерный подход к надёжности через ожидания
                        пользователей, измерения и управление рисками
                    </p>
                </section>
            </div>
        </LectureContentSlide>
    )
}
