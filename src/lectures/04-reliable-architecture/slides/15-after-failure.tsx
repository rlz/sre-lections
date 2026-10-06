import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import afterFailureImage from '../assets/15-after-failure.jpg'

export function Lecture04ReliableArchitectureSlide15AfterFailure() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                padding={0}
                css={[
                    {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: '0.5fr 0.3fr 3fr',
                        // rowGap: 4,
                        height: '100%'
                    },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <Panel
                    css={[
                        { gridColumn: '1 / 3', gridRow: '3', margin: 4 },
                        theme.backgrounds.gradient('accent-1')
                    ]}
                />
                <div
                    css={{
                        gridColumn: '1 / 3',
                        gridRow: '1',
                        padding: theme.spacings.half
                    }}
                >
                    <h1>Подготовка к работе с последствиями</h1>
                </div>

                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '3',
                        padding: theme.spacings.half
                    }}
                >
                    <h2>Полезные инструменты</h2>
                    <ul>
                        <li>поиска пострадавших</li>
                        <li>
                            сверки данных с соседними системами и партнерами
                        </li>
                        <li>внесения исправлений в данные</li>
                        <li>очистки очередей</li>
                    </ul>
                </div>
                <div
                    css={{
                        gridColumn: '2',
                        gridRow: '2 / 5',
                        margin: 8,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end'
                    }}
                >
                    <img
                        src={afterFailureImage}
                        alt="Команда в серверной слаженно отрабатывает учебную пожарную тревогу"
                        css={{
                            width: '100%',
                            borderRadius: theme.radius,
                            ...theme.shadows.low
                        }}
                    />
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
