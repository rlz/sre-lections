import { css } from '@emotion/react'
import { useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture01ReliabilityBasicsSlide03UserOutcome() {
    const theme = useSlidesTheme()
    const layout = css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        maxWidth: '76rem'
    })
    const card = css({
        minHeight: '13rem',
        padding: '1.7rem',
        borderRadius: '1rem'
    })
    const cardTitle = css({
        margin: 0,
        fontSize: '0.56em',
        fontWeight: 800,
        textTransform: 'uppercase'
    })
    const cardText = css({ margin: '1rem 0 0', fontSize: '1.15em' })

    return (
        <LectureContentSlide number={1}>
            <h1
                css={{
                    maxWidth: '78%',
                    margin: '0 0 2.8rem',
                    color: theme.colors.textLight
                }}
            >
                HTTP 200 ещё не означает успех для пользователя
            </h1>
            <div css={layout}>
                <section
                    css={[
                        card,
                        theme.backgrounds.solid('light'),
                        theme.shadows.low
                    ]}
                >
                    <p css={[cardTitle, { color: theme.colors['accent-1'] }]}>
                        Наблюдение сервиса
                    </p>
                    <p css={[cardText, { color: theme.colors.muted }]}>
                        Платёжный API ответил HTTP 200
                    </p>
                </section>
                <section
                    css={[
                        card,
                        theme.backgrounds.solid('light'),
                        theme.shadows.low
                    ]}
                >
                    <p css={[cardTitle, { color: theme.colors['accent-1'] }]}>
                        Результат для пользователя
                    </p>
                    <p css={[cardText, { color: theme.colors.muted }]}>
                        Деньги списаны, но платёж появился в истории только
                        через две минуты. Услуга была доступна?
                    </p>
                </section>
            </div>
        </LectureContentSlide>
    )
}
