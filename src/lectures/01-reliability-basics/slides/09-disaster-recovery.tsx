import { css } from '@emotion/react'
import { useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture01ReliabilityBasicsSlide09DisasterRecovery() {
    const theme = useSlidesTheme()
    const statement = css({ maxWidth: '72rem', fontSize: '1.7em' })
    const preparations = css({
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.8rem',
        marginTop: '2.3rem'
    })
    const preparation = css({
        padding: '0.8rem 1.1rem',
        borderRadius: '999px',
        fontSize: '0.75em',
        fontWeight: 800
    })
    const preparationStyle = [
        preparation,
        theme.backgrounds.solid('neutral'),
        { color: theme.colors['accent-1'] }
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
                Надёжность проверяется и в катастрофе
            </h1>
            <p css={[statement, { color: theme.colors.muted }]}>
                Если утрачена площадка, инфраструктура или данные, организация
                должна суметь восстановить работу.
            </p>
            <div css={preparations}>
                <span css={preparationStyle}>Резервные копии</span>
                <span css={preparationStyle}>План восстановления</span>
                <span css={preparationStyle}>Доступы</span>
                <span css={preparationStyle}>Документация</span>
                <span css={preparationStyle}>Порядок действий</span>
            </div>
        </LectureContentSlide>
    )
}
