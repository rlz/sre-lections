import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture03DistributedSystemsSlide08ReduceCoordination() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={3}>
            <Panel
                css={[
                    {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: theme.spacing,
                        height: '100%',
                        minHeight: 0,
                        padding: 0
                    },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <div
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: theme.spacings.half
                    }}
                >
                    <h1>Как уменьшить потребность в согласовании</h1>
                    <p>
                        Узлы могут действовать независимо, если правила
                        позволяют объединить их результаты позже.
                    </p>
                </div>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gridTemplateRows: 'repeat(4, minmax(0, 1fr))',
                        minHeight: 0,
                        margin: 0
                    }}
                >
                    <Panel
                        css={[
                            { gridColumn: '1', gridRow: '1 / 5', margin: 4 },
                            theme.backgrounds.gradient('accent-1')
                        ]}
                    />
                    <Panel
                        css={[
                            {
                                gridColumn: '1',
                                gridRow: '2 / 5',
                                margin: 8,
                                marginTop: 0
                            },
                            theme.backgrounds.gradient('accent-2')
                        ]}
                    />
                    <Panel
                        css={[
                            {
                                gridColumn: '1',
                                gridRow: '3 / 5',
                                margin: 12,
                                marginTop: 0
                            },
                            theme.backgrounds.gradient('accent-3')
                        ]}
                    />
                    <Panel
                        css={[
                            {
                                gridColumn: '1',
                                gridRow: '4',
                                margin: 16,
                                marginTop: 0
                            },
                            theme.backgrounds.gradient('dark')
                        ]}
                    />
                    <div
                        css={{
                            gridColumn: '1',
                            gridRow: '1',
                            padding: theme.spacings.half,
                            paddingTop: theme.spacings.half / 2
                        }}
                    >
                        <h2>UUID</h2>
                        <p>Узлы создают уникальные идентификаторы локально.</p>
                    </div>
                    <div
                        css={{
                            gridColumn: '1',
                            gridRow: '2',
                            padding: theme.spacings.half,
                            paddingTop: theme.spacings.half / 2
                        }}
                    >
                        <h2>Git</h2>
                        <p>Изменения объединяются после независимой работы.</p>
                    </div>
                    <div
                        css={{
                            gridColumn: '1',
                            gridRow: '3',
                            padding: theme.spacings.half,
                            paddingTop: theme.spacings.half / 2,
                            color: theme.backgrounds.gradient('accent-3').color
                        }}
                    >
                        <h2>Блокчейн</h2>
                        <p>Участники следуют общему протоколу консенсуса.</p>
                    </div>
                    <div
                        css={{
                            gridColumn: '1',
                            gridRow: '4',
                            padding: theme.spacings.half,
                            paddingTop: theme.spacings.half / 2,
                            color: theme.backgrounds.gradient('dark').color
                        }}
                    >
                        <h2>CRDT</h2>
                        <p>
                            Независимые изменения автоматически сливаются по
                            заданным правилам.
                        </p>
                    </div>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
