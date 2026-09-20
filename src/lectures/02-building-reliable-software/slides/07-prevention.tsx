import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide07Prevention() {
    const theme = useSlidesTheme()
    const items = [
        'Архитектура, рассчитанная на отказы',
        'Приёмы в коде и продвинутое тестирование',
        'Безопасное выкладывание новых версий'
    ]

    return (
        <LectureContentSlide number={2}>
            <h1>Предотвращение сбоев</h1>
            <p>
                Большая часть надёжности появляется до production: решения о
                структуре системы, проверках и выпуске версий задают будущий
                риск.
            </p>
            <div
                css={{
                    display: 'grid',
                    flex: 1,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: theme.spacing
                }}
            >
                {items.map((item, index) => (
                    <Panel
                        key={item}
                        css={theme.backgrounds.gradient(`accent-${index + 1}`)}
                    >
                        {item}
                    </Panel>
                ))}
            </div>
            <p>
                <strong>Иллюстрация:</strong> инженер проверяет перед запуском
                мост из модулей: часть соединений уже проходит нагрузочный тест.
            </p>
        </LectureContentSlide>
    )
}
