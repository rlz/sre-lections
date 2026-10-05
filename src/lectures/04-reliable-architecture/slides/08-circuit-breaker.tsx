import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide08CircuitBreaker() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                css={[
                    { height: '100%', width: '100%', padding: 0 },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <h1>Выключатели</h1>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: theme.spacing,
                        height: '100%'
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
                            `Та же касса, что и на иллюстрации к предыдущему
                            слайду. Но на ней нет человека и надпись
                            «технический перерыв». Толкпа не рвется к ней, а
                            спокойно ждет в сторонке.`
                        </span>
                    </div>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
