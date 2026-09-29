import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture03DistributedSystemsSlide13Pacelc() {
    const theme = useSlidesTheme()
    const pacelcExplanations = [
        ['P', 'Если связь между группами узлов потеряна,'],
        ['A', 'выбираем доступность: продолжаем отвечать;'],
        ['C', 'или согласованность: сохраняем строгую согласованность.'],
        ['E', 'Если разделения сети нет,'],
        ['L', 'выбираем меньшую задержку'],
        ['C', 'или строгую согласованность.']
    ]

    return (
        <LectureContentSlide number={3}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '0.8fr 0.45fr 1.1fr 1.1fr',
                    height: '100%',
                    minHeight: 0,
                    padding: 0
                }}
            >
                <Panel
                    css={[
                        { gridColumn: '1 / 3', gridRow: '1 / 5' },
                        theme.backgrounds.gradient('light')
                    ]}
                />
                <div
                    css={{
                        gridColumn: '1 / 3',
                        gridRow: '1',
                        padding: theme.spacings.half
                    }}
                >
                    <h1>PACELC: выбор при сбое и в обычной работе</h1>
                    <p css={{ margin: 0 }}>
                        P — Partition · A — Availability · C — Consistency · E —
                        Else · L — Latency · C — Consistency
                    </p>
                </div>
                <Panel
                    css={[
                        { gridColumn: '1 / 3', gridRow: '3 / 5', margin: 4 },
                        theme.backgrounds.gradient('accent-1')
                    ]}
                />
                <Panel
                    css={[
                        { gridColumn: '1 / 3', gridRow: '4', margin: 8 },
                        theme.backgrounds.gradient('accent-2')
                    ]}
                />
                <Panel
                    css={[
                        { gridColumn: '1', gridRow: '2 / 5', margin: 12 },
                        theme.backgrounds.gradient('dark')
                    ]}
                />
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '2 / 5',
                        padding: theme.spacings.half,
                        color: theme.backgrounds.gradient('dark').color
                    }}
                >
                    <div
                        css={{
                            position: 'relative',
                            display: 'grid',
                            gridTemplateRows: 'repeat(6, minmax(0, 1fr))',
                            height: '100%'
                        }}
                    >
                        <div
                            css={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: '2.25em',
                                width: 1,
                                background: 'currentColor'
                            }}
                        />
                        {pacelcExplanations.map(
                            ([letter, explanation], index) => (
                                <p
                                    key={`${letter}-${index}`}
                                    css={{
                                        display: 'grid',
                                        gridTemplateColumns: '1.5em 1fr',
                                        columnGap: '1.5em',
                                        alignItems: 'baseline',
                                        alignSelf: 'center',
                                        margin: 0
                                    }}
                                >
                                    <strong
                                        css={{
                                            justifySelf: 'end',
                                            alignSelf:
                                                index === 2
                                                    ? 'center'
                                                    : 'baseline'
                                        }}
                                    >
                                        {letter}
                                    </strong>
                                    <span>{explanation}</span>
                                </p>
                            )
                        )}
                    </div>
                </div>
                <div
                    css={{
                        gridColumn: '2',
                        gridRow: '3',
                        padding: theme.spacings.half
                    }}
                >
                    <h2>При разделении сети</h2>
                    <p>
                        Продолжать отвечать на запросы или сохранять строгую
                        согласованность при потере связи между узлами?
                    </p>
                </div>
                <div
                    css={{
                        gridColumn: '2',
                        gridRow: '4',
                        padding: theme.spacings.half
                    }}
                >
                    <h2>В обычной работе</h2>
                    <p>
                        Отвечать с меньшей задержкой или ждать подтверждений
                        ради строгой согласованности?
                    </p>
                </div>
            </div>
        </LectureContentSlide>
    )
}
