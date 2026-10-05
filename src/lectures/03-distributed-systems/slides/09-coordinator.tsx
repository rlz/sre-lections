import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import coordinator from '../assets/09-coordinator.jpg'

export function Lecture03DistributedSystemsSlide09Coordinator() {
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
                        padding: 4
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
                    <h1>Один координатор: проще, но уязвимо</h1>
                    <p>
                        Один участник распределяет работу и помогает остальным
                        прийти к общему решению — как организатор встречи или
                        дирижёр.
                    </p>
                    <p>
                        Если он недоступен, работа может остановиться. Узлы
                        могут выбрать нового лидера и продолжить.
                    </p>
                </div>
                <div
                    css={{
                        margin: 4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 0,
                        minHeight: 0
                    }}
                >
                    <img
                        src={coordinator}
                        alt="Дирижёр задаёт общий темп оркестру"
                        css={[
                            {
                                display: 'block',
                                height: '100%',
                                width: 'auto',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                borderRadius: theme.radius
                            },
                            theme.shadows.low
                        ]}
                    />
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
