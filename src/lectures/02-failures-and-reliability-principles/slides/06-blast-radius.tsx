import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import shipCompartments from '../assets/06-ship-compartments.jpg'

export function Lecture02FailuresAndReliabilityPrinciplesSlide06BlastRadius() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={2}>
            <Panel
                padding={0}
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <div css={{ flex: 1, padding: theme.spacings.half }}>
                    <h1>Масштаб влияния</h1>
                    <p>
                        Сервис полезно строить так, чтобы при проблеме страдали
                        не все пользователи и не все функции. Чем меньше
                        пострадавших, тем меньше масштаб сбоя.
                    </p>
                </div>
                <img
                    src={shipCompartments}
                    alt="Корабль в разрезе с затопленным отсеком и герметичными переборками"
                    css={[
                        {
                            width: 'calc(100% - 8px)',
                            margin: 4,
                            borderRadius: theme.radii.base
                        },
                        theme.shadows.low
                    ]}
                />
            </Panel>
        </LectureContentSlide>
    )
}
