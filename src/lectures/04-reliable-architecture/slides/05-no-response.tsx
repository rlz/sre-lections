import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import noResponseImage from '../assets/05-no-response.jpg'

export function Lecture04ReliableArchitectureSlide05NoResponse() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                padding={0}
                css={[
                    {
                        display: 'flex',
                        height: '100%',
                        gap: theme.spacings.half
                    },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <div
                    css={{
                        flex: 1,
                        padding: theme.spacings.half
                    }}
                >
                    <h1>Зависимость может вообще не отвечать</h1>
                </div>
                <img
                    src={noResponseImage}
                    alt="Сервер сидит спиной в датацентре и не отвечает на запросы"
                    css={{
                        flex: '0 1 auto',
                        width: 'auto',
                        height: 'calc(100% - 8px)',
                        maxWidth: 'calc(100% - 8px)',
                        margin: 4,
                        boxSizing: 'border-box',
                        borderRadius: theme.radius,
                        ...theme.shadows.low
                    }}
                />
            </Panel>
        </LectureContentSlide>
    )
}
