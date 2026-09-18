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
    const column = css({
        minHeight: '12rem',
        padding: theme.spacings.base,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    })
    const label = css({
        margin: 0,
        fontSize: '0.6em',
        fontWeight: 800,
        textTransform: 'uppercase'
    })
    const text = css({ margin: '1rem 0 0', fontSize: '1.34em' })
    const panel = [column]
    const accent = { color: theme.colors['accent-1'] }

    return (
        <LectureContentSlide number={1}>
            <h1
                css={{
                    maxWidth: '78%',
                    margin: '0 0 2.8rem',
                    color: theme.colors.textLight
                }}
            >
                Это разные понятия
            </h1>
            <div css={comparison}>
                <section
                    css={[...panel, theme.backgrounds.gradient('accent-1')]}
                >
                    <p css={[label, accent]}>Надёжность</p>
                    <p css={[text, { color: theme.colors.textLight }]}>
                        Свойство системы и способа её эксплуатации
                    </p>
                </section>
                <section
                    css={[...panel, theme.backgrounds.gradient('accent-2')]}
                >
                    <p css={[label, accent]}>Доступность</p>
                    <p css={[text, { color: theme.colors.textLight }]}>
                        История выполнения выбранного пользовательского ожидания
                    </p>
                </section>
            </div>
        </LectureContentSlide>
    )
}
