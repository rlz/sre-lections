import { css } from '@emotion/react'
import { useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture01ReliabilityBasicsSlide07ReliabilityAndAvailability() {
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
    const text = css({ margin: '1rem 0 0', fontSize: '1.34em' })
    const panel = [column, theme.backgrounds.solid('light'), theme.shadows.low]
    const accent = { color: theme.colors['accent-1'] }
    const muted = { color: theme.colors.muted }

    return (
        <LectureContentSlide number={1} title="Это разные понятия">
            <div css={comparison}>
                <section css={panel}>
                    <p css={[label, accent]}>Надёжность</p>
                    <p css={[text, muted]}>
                        Свойство системы и способа её эксплуатации
                    </p>
                </section>
                <section css={panel}>
                    <p css={[label, accent]}>Доступность</p>
                    <p css={[text, muted]}>
                        История выполнения выбранного пользовательского ожидания
                    </p>
                </section>
            </div>
        </LectureContentSlide>
    )
}
