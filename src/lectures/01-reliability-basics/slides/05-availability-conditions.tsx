import { css } from '@emotion/react'
import { useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture01ReliabilityBasicsSlide05AvailabilityConditions() {
    const theme = useSlidesTheme()
    const list = css({
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem 3rem',
        maxWidth: '75rem',
        padding: 0,
        margin: 0,
        listStyle: 'none'
    })
    const item = css({
        padding: '1.3rem 0',
        borderTop: '2px solid',
        fontSize: '1.1em'
    })
    const label = css({
        display: 'block',
        marginBottom: '0.4rem',
        fontSize: '0.625em',
        fontWeight: 800,
        textTransform: 'uppercase'
    })
    const itemStyle = {
        borderTopColor: theme.colors['accent-2'],
        color: theme.colors.muted
    }
    const labelStyle = { color: theme.colors['accent-1'] }

    return (
        <LectureContentSlide
            number={1}
            title="Прежде чем измерять доступность, договоритесь"
        >
            <ul css={list}>
                <li css={[item, itemStyle]}>
                    <span css={[label, labelStyle]}>Границы услуги</span>
                    Какие системы и зависимости в неё входят?
                </li>
                <li css={[item, itemStyle]}>
                    <span css={[label, labelStyle]}>Сценарий</span>
                    Какие действия пользователя важны?
                </li>
                <li css={[item, itemStyle]}>
                    <span css={[label, labelStyle]}>Корректность</span>
                    Как выглядит правильный результат?
                </li>
                <li css={[item, itemStyle]}>
                    <span css={[label, labelStyle]}>Время</span>
                    Какая задержка ещё приемлема?
                </li>
                <li css={[item, itemStyle]}>
                    <span css={[label, labelStyle]}>Метод</span>
                    Считаем проверки, запросы или сценарии с весами?
                </li>
                <li css={[item, itemStyle]}>
                    <span css={[label, labelStyle]}>Период</span>
                    За какой промежуток считаем?
                </li>
            </ul>
        </LectureContentSlide>
    )
}
