import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02FailuresAndReliabilityPrinciplesSlide08Principles() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={2}>
            <div
                css={{
                    display: 'grid',
                    flex: 1,
                    gridTemplateColumns: '1fr 1fr',
                    gap: theme.spacings.base
                }}
            >
                <div>
                    <h1>Полезные принципы</h1>
                    <p
                        css={{
                            fontSize: '3em',
                            textAlign: 'center',
                            marginTop: '2em !important'
                        }}
                    >
                        Надежда — не стратегия
                    </p>
                </div>
                <Panel css={{ height: '100%' }}>
                    <p>Основной девиз SRE в Google</p>
                </Panel>
            </div>
        </LectureContentSlide>
    )
}
