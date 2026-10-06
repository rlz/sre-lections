import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import timeoutsImage from '../assets/06-timeouts.jpg'

export function Lecture04ReliableArchitectureSlide06Timeouts() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                padding={0}
                css={[
                    {
                        display: 'flex',
                        height: '100%'
                    },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <div
                    css={{
                        padding: theme.spacings.half,
                        gap: theme.spacings.half,
                        flex: 1
                    }}
                >
                    <h1>Таймауты сложнее чем кажутся</h1>
                    <ul>
                        <li>Таймауты на установку соединения</li>
                        <li>Таймаут на вызов</li>
                        <li>Сквозной таймаут на всю цепочку запросов</li>
                    </ul>
                </div>
                <img
                    src={timeoutsImage}
                    alt="Временная схема вызовов от пользователя через сервисы A, B и C с общим дедлайном"
                    css={{
                        flex: '0 1 auto',
                        width: 'auto',
                        height: 'calc(100% - 8px)',
                        maxWidth: 'calc(100% - 8px)',
                        boxSizing: 'border-box',
                        margin: 4,
                        borderRadius: theme.radius,
                        ...theme.shadows.low
                    }}
                />
            </Panel>
        </LectureContentSlide>
    )
}
