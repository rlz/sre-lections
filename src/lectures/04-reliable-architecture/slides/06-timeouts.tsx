import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide06Timeouts() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                css={[
                    { height: '100%', width: '100%', padding: 0 },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <h1>Таймауты сложнее чем кажутся</h1>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateRows: 'auto 1fr',
                        height: '100%'
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
                            width: '100%',
                            height: '100%',
                            minHeight: 180,
                            padding: 16,
                            boxSizing: 'border-box',
                            borderRadius: 8,
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
            </Panel>
        </LectureContentSlide>
    )
}
