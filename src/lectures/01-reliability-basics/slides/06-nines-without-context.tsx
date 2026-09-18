import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture01ReliabilityBasicsSlide06NinesWithoutContext() {
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
                        { gridRow: '2 / 4', gridColumn: '1 / 3' },
                        theme.backgrounds.gradient('dark')
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
                </div>
                <div
                    css={{
                        gridRow: '2',
                        gridColumn: '1',
                        padding: theme.spacings.half,
                        color: theme.colors.textDark
                    }}
                >
                    Чего именно?
                </div>
                <Panel
                    css={[
                        { gridRow: '2', gridColumn: '2' },
                        theme.backgrounds.gradient('accent-1')
                    ]}
                >
                    Как это посчитали?
                </Panel>
                <Panel
                    css={[
                        { gridRow: '3', gridColumn: '1' },
                        theme.backgrounds.gradient('accent-2')
                    ]}
                >
                    За какой период?
                </Panel>
                <div
                    css={{
                        gridRow: '3',
                        gridColumn: '2',
                        padding: theme.spacings.half,
                        color: theme.colors.textDark
                    }}
                >
                    Это прошлый результат или обещание на будущее?
                </div>
            </div>
        </LectureContentSlide>
    )
}
