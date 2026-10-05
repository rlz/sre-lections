import { Panel, useSlidesTheme } from 'rlz-web-slides'

import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide13AnomalousLoad() {
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
                    Работа под аномальной нагрузкой
                </h1>
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '2',
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: theme.spacing,
                        minHeight: 0
                    }}
                >
                    <div>
                        <p css={{ padding: theme.spacings.half }}>
                            Под аномальной нагрузкой сервис должен отказывать
                            контролируемо
                        </p>
                        <p css={{ padding: theme.spacings.half }}>
                            Ограничьте частоту запросов и размер очереди, пока
                            ресурсы ещё доступны
                        </p>
                        <p css={{ padding: theme.spacings.half }}>
                            После восстановления удалите работу, которая уже
                            потеряла смысл
                        </p>
                        <Panel
                            css={[
                                { margin: 4 },
                                theme.backgrounds.gradient('accent-1')
                            ]}
                        >
                            Например, не отправляйте временный пароль после
                            истечения его срока
                        </Panel>
                    </div>
                </div>
            </div>
        </LectureContentSlide>
    )
}
