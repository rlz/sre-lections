import { Panel, useSlidesTheme } from 'rlz-web-slides'

import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide09StartupAndReconnect() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                css={[
                    { height: '100%', width: '100%', padding: 0 },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <h1>Запуск после падения</h1>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gridTemplateRows: '1fr',
                        height: '100%',
                        minHeight: 0
                    }}
                >
                    <Panel
                        css={[
                            { gridColumn: '1 / 4', gridRow: '1', margin: 4 },
                            theme.backgrounds.gradient('accent-1')
                        ]}
                    />
                    <Panel
                        css={[
                            { gridColumn: '2 / 4', gridRow: '1', margin: 8 },
                            theme.backgrounds.gradient('accent-2')
                        ]}
                    />
                    <Panel
                        css={[
                            { gridColumn: '3', gridRow: '1', margin: 12 },
                            theme.backgrounds.gradient('accent-3')
                        ]}
                    />
                    <div
                        css={{
                            gridColumn: '1',
                            gridRow: '1',
                            padding: theme.spacings.half
                        }}
                    >
                        <p>
                            Стартуем даже если зависимости недоступны (даже,
                            если недоступна база данных)
                        </p>
                    </div>
                    <div
                        css={{
                            gridColumn: '2',
                            gridRow: '1',
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
                            gridColumn: '3',
                            gridRow: '1',
                            padding: theme.spacings.half,
                            color: theme.backgrounds.gradient('accent-3').color
                        }}
                    >
                        <p>
                            После потери связи он должен переподключаться с
                            ограниченной частотой
                        </p>
                    </div>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
