import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide11DoNotTouch() {
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
                        «Работает — не трогай»
                    </p>
                </div>
                <Panel css={{ height: '100%' }}>
                    <p>
                        Периодически <strong>шатать систему</strong> полезно:
                        обновлять зависимости, проверять восстановление,
                        проводить учения. Так сохраняются знания и навык
                        действовать в реальной аварии.
                    </p>
                </Panel>
            </div>
        </LectureContentSlide>
    )
}
