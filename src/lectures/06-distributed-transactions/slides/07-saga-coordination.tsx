import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture06DistributedTransactionsSlide07SagaCoordination() {
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
                    <h1>Два способа координировать сагу</h1>
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
                        <h2>Хореография</h2>
                        <p>Сервисы реагируют на события друг друга.</p>
                        <p>Сложнее проследить весь процесс.</p>
                    </div>
                    <div
                        css={{
                            gridColumn: '2',
                            gridRow: '1',
                            padding: theme.spacings.half
                        }}
                    >
                        <h2>Оркестрация</h2>
                        <p>Координатор запускает шаги и обрабатывает ошибки.</p>
                        <p>Важно надёжно хранить состояние процесса.</p>
                    </div>
                    <p
                        css={{
                            gridColumn: '1 / 3',
                            gridRow: '2',
                            padding: theme.spacings.half
                        }}
                    >
                        При любом подходе поведение при сбое должно быть явным.
                    </p>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
