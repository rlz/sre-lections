import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide15AfterFailure() {
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
                    Инструменты для работы с последствиями
                </h1>
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '2',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        minHeight: 0
                    }}
                >
                    <ul css={{ padding: theme.spacings.half }}>
                        <li>Инструменты поиска пострадавших</li>
                        <li>
                            Инстументы сверки данных с соседними системами и
                            партнерами
                        </li>
                        <li>Инструменты внесения исправлений в данные</li>
                        <li>Инструменты очистки очередей</li>
                    </ul>
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
                        <br />
                        `Пожарная тренировка, команда заранее отрабатывает
                        действия по сигналу.`
                    </div>
                </div>
            </div>
        </LectureContentSlide>
    )
}
