import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import unsureServer from '../assets/06-server-unsure.jpg'

export function Lecture03DistributedSystemsSlide07SilenceIsNotAnAnswer() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={3}>
            <Panel
                css={[
                    {
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                        gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
                        gap: theme.spacing,
                        height: '100%',
                        minHeight: 0,
                        padding: 4
                    },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '1 / 4',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: 0
                    }}
                >
                    <div css={{ padding: theme.spacings.half }}>
                        <h1>Проблема таймаута</h1>
                        <p>
                            Если ответа нет, узел-отправитель не знает, на каком
                            этапе всё остановилось.
                        </p>
                    </div>
                    <img
                        src={unsureServer}
                        alt="Растерянный сервер в стойке датацентра недоумённо разводит руками"
                        css={[
                            {
                                display: 'block',
                                width: '100%',
                                height: 'auto',
                                alignSelf: 'center',
                                margin: 4,
                                borderRadius: theme.radius
                            },
                            theme.shadows.low
                        ]}
                    />
                </div>
                <div
                    css={{
                        gridColumn: '2',
                        gridRow: '1 / 4',
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
                        minHeight: 0,
                        margin: 4
                    }}
                >
                    <Panel
                        css={[
                            { gridColumn: '1', gridRow: '1 / 4' },
                            theme.backgrounds.gradient('accent-1')
                        ]}
                    />
                    <Panel
                        css={[
                            { gridColumn: '1', gridRow: '2 / 4', margin: 4 },
                            theme.backgrounds.gradient('accent-2')
                        ]}
                    />
                    <Panel
                        css={[
                            { gridColumn: '1', gridRow: '3', margin: 8 },
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
                        <h2>Запрос не дошёл</h2>
                        <p>Сервер его не получил.</p>
                    </div>
                    <div
                        css={{
                            gridColumn: '1',
                            gridRow: '2',
                            padding: theme.spacings.half
                        }}
                    >
                        <h2>Пока работаем</h2>
                        <p>Ответ ещё не готов.</p>
                    </div>
                    <div
                        css={{
                            gridColumn: '1',
                            gridRow: '3',
                            padding: theme.spacings.half,
                            color: theme.backgrounds.gradient('accent-3').color
                        }}
                    >
                        <h2>Ответ не дошёл</h2>
                        <p>Сервер мог выполнить запрос.</p>
                    </div>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
