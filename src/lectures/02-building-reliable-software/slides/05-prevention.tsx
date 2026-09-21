import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide05Prevention() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={2}>
            <div
                css={{
                    display: 'grid',
                    flex: 1,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: '2fr 1fr 1fr',
                    gap: 4
                }}
            >
                <Panel
                    css={[
                        { gridRow: '1 / 4', gridColumn: '1 / 4' },
                        theme.backgrounds.gradient('light')
                    ]}
                ></Panel>
                <div
                    css={{
                        gridRow: '1',
                        gridColumn: '1 / 3',
                        padding: theme.spacings.half
                    }}
                >
                    <h1>Предотвращение сбоев</h1>
                </div>
                <Panel
                    css={{
                        gridRow: '2',
                        gridColumn: '1 / 4',
                        margin: '0 4px'
                    }}
                />
                <div
                    css={{
                        gridRow: '2',
                        gridColumn: '1',
                        padding: theme.spacings.half
                    }}
                >
                    Устойчивая архитектура
                </div>
                <Panel
                    css={{
                        gridRow: '3',
                        gridColumn: '1 / 4',
                        margin: '0 4px 4px 4px'
                    }}
                />
                <div
                    css={{
                        gridRow: '3',
                        gridColumn: '1',
                        padding: theme.spacings.half
                    }}
                >
                    Устойчивый код
                </div>
                <Panel
                    css={[
                        {
                            gridRow: '2',
                            gridColumn: '2 / 4',
                            margin: '4px 8px 4px 0'
                        },
                        theme.backgrounds.gradient('accent-1')
                    ]}
                />
                <div
                    css={{
                        gridRow: '2',
                        gridColumn: '2',
                        padding: theme.spacings.half
                    }}
                >
                    Надежное тестирование
                </div>
                <Panel
                    css={[
                        {
                            gridRow: '3',
                            gridColumn: '2 / 4',
                            margin: '4px 8px 8px 0'
                        },
                        theme.backgrounds.gradient('accent-2')
                    ]}
                />
                <div
                    css={{
                        gridRow: '3',
                        gridColumn: '2',
                        padding: theme.spacings.half
                    }}
                >
                    Безопасные релизы
                </div>
                <Panel
                    css={[
                        {
                            gridRow: '1 / 4',
                            gridColumn: '3',
                            margin: '12px 12px 12px 0'
                        },
                        theme.backgrounds.gradient('dark')
                    ]}
                >
                    <h2>Коммуникация</h2>
                    <p>
                        В том числе письменная. В том числе через документацию.
                    </p>
                    <p>
                        Много сбоев происходит от того, что кто-то чего-то не
                        знал, или не правильно понял.
                    </p>
                    <p>
                        Документация может быть отсутствующей, неполной,
                        устаревшей, неверной, избыточной.
                    </p>
                </Panel>
            </div>
        </LectureContentSlide>
    )
}
