import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide05NoResponse() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr)',
                    gridTemplateRows: 'auto minmax(0, 1fr)',
                    height: '100%',
                    minHeight: 0
                }}
            >
                <Panel
                    css={[
                        { gridColumn: '1', gridRow: '1 / 3' },
                        theme.backgrounds.gradient('light')
                    ]}
                />
                <h1
                    css={{
                        gridColumn: '1',
                        gridRow: '1',
                        padding: theme.spacings.half
                    }}
                >
                    Зависимость может вообще не отвечать
                </h1>
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 'calc(100% - 8px)',
                        margin: 4,
                        minHeight: 180,
                        padding: 16,
                        boxSizing: 'border-box',
                        borderRadius: theme.radius,
                        ...theme.shadows.low,
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
            </div>
        </LectureContentSlide>
    )
}
