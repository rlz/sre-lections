import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02FailuresAndReliabilityPrinciplesSlide13BlamelessCulture() {
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
                        Необвинительная культура
                    </p>
                </div>
                <Panel css={{ height: '100%' }}>
                    <p>
                        Открытый разговор об ошибках помогает учиться и замечать
                        риски раньше. Он не отменяет ответственности за
                        намеренные действия, халатность или отказ учиться.
                    </p>
                </Panel>
            </div>
        </LectureContentSlide>
    )
}
