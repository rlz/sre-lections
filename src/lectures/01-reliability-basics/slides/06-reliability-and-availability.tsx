import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import reliabilityArchitecture from '../assets/04-reliability-architecture.png'
import availabilityDashboard from '../assets/05-availability-dashboard.png'

export function Lecture01ReliabilityBasicsSlide06ReliabilityAndAvailability() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={1}>
            <div css={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h1>Подытожим</h1>
                <div
                    css={{
                        flex: 1,
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: theme.spacings.base
                    }}
                >
                    <Panel
                        css={[
                            {
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            theme.backgrounds.gradient('accent-1')
                        ]}
                    >
                        <div
                            css={{
                                padding: theme.spacings.half,
                                flex: 1
                            }}
                        >
                            <h2>Надёжность</h2>
                            <p>
                                Свойство системы, способа её разработки и
                                эксплуатации
                            </p>
                        </div>
                        <img
                            src={reliabilityArchitecture}
                            alt="Инженер проверяет архитектуру сервиса с резервным путём и мониторингом"
                            css={[
                                {
                                    display: 'block',
                                    width: 'calc(100% - 8px)',
                                    borderRadius: theme.radius,
                                    margin: 4
                                },
                                theme.shadows.medium
                            ]}
                        />
                    </Panel>
                    <Panel
                        css={[
                            {
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            theme.backgrounds.gradient('accent-2')
                        ]}
                    >
                        <div
                            css={{
                                padding: theme.spacings.half,
                                flex: 1
                            }}
                        >
                            <h2>Доступность</h2>
                            <p>
                                История системы, зафиксированная и подсчитанная
                                по какой-либо методологии.
                            </p>
                        </div>
                        <img
                            src={availabilityDashboard}
                            alt="Дашборд доступности с сезонностью запросов, сбоем и показателем 99.87 процента"
                            css={[
                                {
                                    display: 'block',
                                    width: 'calc(100% - 8px)',
                                    borderRadius: theme.radius,
                                    margin: 4
                                },
                                theme.shadows.medium
                            ]}
                        />
                    </Panel>
                </div>
            </div>
        </LectureContentSlide>
    )
}
