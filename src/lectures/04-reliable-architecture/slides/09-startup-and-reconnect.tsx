import { Panel, useSlidesTheme } from 'rlz-web-slides'

import { LectureContentSlide } from '../../../components/lecture-content-slide'
import startupAndReconnectImage from '../assets/09-startup-and-reconnect.jpg'

export function Lecture04ReliableArchitectureSlide09StartupAndReconnect() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                padding={0}
                css={[
                    {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: '0.5fr 0.5fr 1fr 1fr 1fr',
                        height: '100%',
                        minHeight: 0
                    },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <Panel
                    css={[
                        { gridColumn: '1 / 3', gridRow: '3 / 6', margin: 4 },
                        theme.backgrounds.gradient('neutral')
                    ]}
                />
                <Panel
                    css={[
                        {
                            gridColumn: '1 / 3',
                            gridRow: '4 / 6',
                            margin: 8,
                            marginTop: 0
                        },
                        theme.backgrounds.gradient('accent-2')
                    ]}
                />
                <Panel
                    css={[
                        {
                            gridColumn: '1 / 3',
                            gridRow: '5',
                            margin: 12,
                            marginTop: 0
                        },
                        theme.backgrounds.gradient('dark')
                    ]}
                />
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '1',
                        padding: theme.spacings.half
                    }}
                >
                    <h1>Запуск</h1>
                </div>

                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '3',
                        padding: theme.spacings.half
                    }}
                >
                    <p>
                        Стартуем даже если зависимости недоступны (даже, если
                        недоступна база данных)
                    </p>
                </div>
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '4',
                        padding: theme.spacings.half
                    }}
                >
                    <p>
                        Он может включить безопасные функции и подключиться
                        позже
                    </p>
                </div>
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '5',
                        padding: theme.spacings.half,
                        color: theme.colors.textDark
                    }}
                >
                    <strong>
                        После потери связи он должен переподключаться с
                        ограниченной частотой
                    </strong>
                </div>
                <img
                    src={startupAndReconnectImage}
                    alt="Илон Маск нажимает большую красную кнопку запуска, а за окном взрывается ракета"
                    css={{
                        gridColumn: '2',
                        gridRow: '2 / 6',
                        display: 'block',
                        width: 'calc(100% - 32px)',
                        height: 'auto',
                        alignSelf: 'center',
                        margin: 16,
                        borderRadius: theme.radius,
                        ...theme.shadows.low,
                        background: '#d8d2f0'
                    }}
                />
            </Panel>
        </LectureContentSlide>
    )
}
