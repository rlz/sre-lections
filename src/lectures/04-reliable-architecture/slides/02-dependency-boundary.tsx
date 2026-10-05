import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import illustration from '../assets/02-dependency-boundary.png'

export function Lecture04ReliableArchitectureSlide02DependencyBoundary() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gridTemplateRows: 'auto 1fr',
                    height: '100%',
                    gap: theme.spacings.half,
                    minHeight: 0,
                    padding: 0
                }}
            >
                <Panel
                    css={[
                        { gridColumn: '1', gridRow: '1 / 3' },
                        theme.backgrounds.gradient('light')
                    ]}
                />
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '1',
                        padding: theme.spacings.half,
                        paddingBottom: 0
                    }}
                >
                    <h1>Поговорим о зависимостях</h1>
                    <p>
                        Перед тем, как начать, условимся, что база данных —
                        такая же равноправная зависимость, как и остальные и
                        никаких особых привелегий не имеет.
                    </p>
                </div>
                <img
                    src={illustration}
                    alt="База данных и два сервера-персонажа в датацентре стоят рядом и держатся за руки."
                    css={{
                        gridColumn: '1',
                        gridRow: '2',
                        display: 'block',
                        width: 'calc(100% - 8px)',
                        height: 'calc(100% - 8px)',
                        boxSizing: 'border-box',
                        margin: 4,
                        borderRadius: theme.radius,
                        ...theme.shadows.low
                    }}
                />
            </div>
        </LectureContentSlide>
    )
}
