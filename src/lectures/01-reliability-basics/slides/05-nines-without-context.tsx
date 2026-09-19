import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture01ReliabilityBasicsSlide05NinesWithoutContext() {
    const theme = useSlidesTheme()
    return (
        <LectureContentSlide number={1}>
            <div
                css={{
                    display: 'grid',
                    height: '100%',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '2.5fr 1fr 1fr'
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
                    <h1>Девятки без контекста ничего не обещают</h1>
                    <p>
                        В рекламных материалах, в статьях в интеренете вы можете
                        увидеть заявления о надежности в сколько-то девяток.
                    </p>
                    <p>
                        Поскольку методологии очень разные эти заявления
                        означают разное. Без вникания в детали разумнее не
                        обращать внимания на эти заявления.
                    </p>
                    <p>Показатели разных компаний не сравнимы друг с другом.</p>
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
                    Надежность чего именно заявляется?
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
                    Как это посчитали?
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
                    За какой период?
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
                    Это прошлый результат или обещание на будущее?
                </div>
            </div>
        </LectureContentSlide>
    )
}
