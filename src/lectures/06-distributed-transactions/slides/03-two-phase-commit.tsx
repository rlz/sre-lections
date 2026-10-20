import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture06DistributedTransactionsSlide03TwoPhaseCommit() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={6}>
            <Panel
                padding={0}
                css={[
                    {
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <div css={{ padding: theme.spacings.half }}>
                    <h1>Сначала подготовить. Потом зафиксировать</h1>
                </div>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: '1fr auto',
                        flex: 1,
                        minHeight: 0,
                        padding: 0
                    }}
                >
                    <Panel
                        css={[
                            {
                                gridColumn: '1 / 3',
                                gridRow: '1 / 3',
                                margin: 4
                            },
                            theme.backgrounds.gradient('accent-1')
                        ]}
                    />
                    <Panel
                        css={[
                            { gridColumn: '2', gridRow: '1 / 3', margin: 8 },
                            theme.backgrounds.gradient('accent-2')
                        ]}
                    />
                    <div
                        css={{
                            gridColumn: '1',
                            gridRow: '1',
                            padding: theme.spacings.half
                        }}
                    >
                        <h2>1. Подготовка</h2>
                        <p>
                            Каждый участник проверяет, может ли выполнить свою
                            часть, и резервирует ресурсы.
                        </p>
                    </div>
                    <div
                        css={{
                            gridColumn: '2',
                            gridRow: '1',
                            padding: theme.spacings.half
                        }}
                    >
                        <h2>2. Фиксация</h2>
                        <p>Если готовы все, участники завершают транзакцию.</p>
                    </div>
                    <p
                        css={{
                            gridColumn: '1 / 3',
                            gridRow: '2',
                            padding: theme.spacings.half
                        }}
                    >
                        Если кто-то не готов, транзакцию не фиксируют.
                    </p>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
