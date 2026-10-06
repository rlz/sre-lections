import { Panel, useSlidesTheme } from 'rlz-web-slides'

import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide13AnomalousLoad() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <div
                css={{
                    display: 'grid',
                    height: '100%',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '2fr 1fr 1fr'
                }}
            >
                <Panel css={{ gridRow: '1 / 4', gridColumn: '1 / 3' }} />
                <Panel
                    css={[
                        { gridRow: '2 / 4', gridColumn: '1 / 3', margin: 4 },
                        theme.backgrounds.gradient('neutral')
                    ]}
                />
                <div
                    css={{
                        gridRow: '1',
                        gridColumn: '1 / 3',
                        padding: theme.spacings.half
                    }}
                >
                    <h1>Дизайн работы под аномальной нагрузкой</h1>
                </div>
                <div
                    css={{
                        gridRow: '2',
                        gridColumn: '1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: theme.spacings.half,
                        color: theme.colors.textLight,
                        margin: 8
                    }}
                >
                    Под аномальной нагрузкой сервис должен отказывать
                    контролируемо
                </div>
                <Panel
                    css={[
                        {
                            gridRow: '2',
                            gridColumn: '2',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 8
                        },
                        theme.backgrounds.gradient('accent-1')
                    ]}
                >
                    Ограничьте частоту запросов и размер очереди, пока ресурсы
                    ещё доступны
                </Panel>
                <Panel
                    css={[
                        {
                            gridRow: '3',
                            gridColumn: '1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 8
                        },
                        theme.backgrounds.gradient('accent-2')
                    ]}
                >
                    После восстановления удалите работу, которая уже потеряла
                    смысл
                </Panel>
                <div
                    css={{
                        gridRow: '3',
                        gridColumn: '2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: theme.spacings.half,
                        color: theme.colors.textLight,
                        margin: 8
                    }}
                >
                    Например, не отправляйте временный пароль после истечения
                    его срока
                </div>
            </div>
        </LectureContentSlide>
    )
}
