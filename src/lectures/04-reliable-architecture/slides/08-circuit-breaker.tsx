import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide08CircuitBreaker() {
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
                    Выключатели
                </h1>
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '2',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: theme.spacing,
                        minHeight: 0
                    }}
                >
                    <div>
                        <p css={{ padding: theme.spacings.half }}>
                            При массовых ошибках, остановите поток
                        </p>
                        <p css={{ padding: theme.spacings.half }}>
                            Выключатель пропускает пробные запросы и открывает
                            путь после восстановления
                        </p>
                        <Panel
                            css={[
                                { margin: 4 },
                                theme.backgrounds.gradient('accent-2')
                            ]}
                        >
                            <strong>
                                Возобновляйте подключения постепенно и со
                                случайным смещением
                            </strong>
                        </Panel>
                    </div>
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
                            `Та же касса, что и на иллюстрации к предыдущему
                            слайду. Но на ней нет человека и надпись
                            «технический перерыв». Толкпа не рвется к ней, а
                            спокойно ждет в сторонке.`
                        </span>
                    </div>
                </div>
            </div>
        </LectureContentSlide>
    )
}
