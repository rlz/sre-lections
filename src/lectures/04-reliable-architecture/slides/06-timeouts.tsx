import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide06Timeouts() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr)',
                    gridTemplateRows: 'auto minmax(0, 1fr)',
                    height: '100%',
                    minHeight: 0
                }}
            >
                <Panel
                    css={[
                        { gridColumn: '1', gridRow: '1 / 3' },
                        theme.backgrounds.gradient('light')
                    ]}
                />
                <h1
                    css={{
                        gridColumn: '1',
                        gridRow: '1',
                        padding: theme.spacings.half
                    }}
                >
                    Таймауты сложнее чем кажутся
                </h1>
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '2',
                        display: 'grid',
                        gridTemplateRows: 'auto 1fr',
                        minHeight: 0
                    }}
                >
                    <p css={{ padding: theme.spacings.half }}>
                        Таймауты на установку соединения на вызов, сквозной
                        таймаут на всю цепочку запросов.
                    </p>
                    <div
                        css={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 'calc(100% - 8px)',
                            minHeight: 180,
                            padding: 16,
                            boxSizing: 'border-box',
                            margin: 4,
                            borderRadius: theme.radius,
                            ...theme.shadows.low,
                            background: '#d8d2f0',
                            color: '#343044',
                            textAlign: 'center'
                        }}
                    >
                        <strong>Иллюстрация будет здесь</strong>
                        <span>
                            `Горизонтальная временная схема. Слева пользователь
                            отправляет запрос в сервис A, далее идут вызовы A →
                            B → C. Над всей схемой провести одну временную шкалу
                            с отмеченным общим дедлайном. Под ней показать, что
                            бюджеты A, B и C последовательно занимают части
                            общего времени, а вызов C прекращается до общего
                            дедлайна, оставляя время на ответ пользователю.
                            Отдельно маленькими маркерами обозначить
                            установление соединения и ожидание ответа.`
                        </span>
                    </div>
                </div>
            </div>
        </LectureContentSlide>
    )
}
