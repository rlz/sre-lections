import { Panel, useSlidesTheme } from 'rlz-web-slides'

import { LectureContentSlide } from '../../../components/lecture-content-slide'
import illustration from '../assets/03-dependency-errors.jpg'

export function Lecture04ReliableArchitectureSlide03DependencyErrors() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                css={[
                    {
                        height: '100%',
                        width: '100%',
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column'
                    },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <div css={{ padding: theme.spacings.half, flex: 1 }}>
                    <h1>Зависимость отвечает ошибкой</h1>
                    <p>
                        Наш сервис должен быть готов к тому, что зависимые
                        сервисы могут ответить на его вызовы ошибкой.
                    </p>
                </div>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1.2fr 1fr',
                        gridTemplateRows: '70px auto auto',
                        minHeight: 0
                    }}
                >
                    <Panel
                        css={[
                            {
                                gridColumn: '1 / 3',
                                gridRow: '2 / 4',
                                margin: 4
                            },
                            theme.backgrounds.gradient('accent-1')
                        ]}
                    />
                    <Panel
                        css={[
                            { gridColumn: '1 / 3', gridRow: '3', margin: 8 },
                            theme.backgrounds.gradient('accent-2')
                        ]}
                    />
                    <img
                        src={illustration}
                        alt="Сервер-персонаж запускает бумажный самолётик с надписью 500."
                        css={{
                            gridColumn: '2',
                            gridRow: '1 / 4',
                            display: 'block',
                            width: 'calc(100% - 24px)',
                            height: 'calc(100% - 24px)',
                            boxSizing: 'border-box',
                            margin: 12,
                            borderRadius: theme.radius,
                            ...theme.shadows.low
                        }}
                    />
                    <div
                        css={{
                            gridColumn: '1',
                            gridRow: '2',
                            padding: theme.spacings.half
                        }}
                    >
                        <h2>Что ожидаем</h2>
                        <ul>
                            <li>Отказывает понятной ошибкой</li>
                            <li>
                                Использует альтернативы: кэш или SMS вместо push
                            </li>
                            <li>Пропускает необязательную часть работы</li>
                        </ul>
                    </div>
                    <div
                        css={{
                            gridColumn: '1',
                            gridRow: '3',
                            padding: theme.spacings.half,
                            color: theme.backgrounds.gradient('accent-2').color
                        }}
                    >
                        <h2>Как бывает</h2>
                        <ul>
                            <li>портит данные</li>
                            <li>
                                забивает ресурсы и деградируют соседние функции
                            </li>
                        </ul>
                    </div>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
