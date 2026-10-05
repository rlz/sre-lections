import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide05NoResponse() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                css={[
                    { height: '100%', width: '100%', padding: 0 },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <h1>Зависимость может вообще не отвечать</h1>
                <div
                    css={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        minHeight: 180,
                        padding: 16,
                        boxSizing: 'border-box',
                        borderRadius: 8,
                        background: '#d8d2f0',
                        color: '#343044',
                        textAlign: 'center'
                    }}
                >
                    <strong>Иллюстрация будет здесь</strong>
                    <span>
                        `Сервер в виде персонажа сидит в датацентре к нам спиной
                        с очень обиженным видом — он с нами не разговаривает.`
                    </span>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
