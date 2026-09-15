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
        <LectureContentSlide
            number={1}
            title="Успешный ответ не всегда означает доступную услугу"
        >
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
                        HTTP 200
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
                        Платёж проведён, данные сохранены, результат получен
                        вовремя
                    </p>
                </section>
            </div>
        </LectureContentSlide>
    )
}
