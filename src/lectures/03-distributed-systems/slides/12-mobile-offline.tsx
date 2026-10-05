import { useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import mobileOffline from '../assets/12-mobile-offline.jpg'

export function Lecture03DistributedSystemsSlide12MobileOffline() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={3}>
            <div
                css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    minHeight: 0,
                    minWidth: 0,
                    padding: 0
                }}
            >
                <img
                    src={mobileOffline}
                    alt="Грустный смартфон без связи с открытым безымянным банковским приложением"
                    css={[
                        {
                            display: 'block',
                            width: '100%',
                            height: 'auto',
                            maxHeight: '100%',
                            borderRadius: theme.radius
                        },
                        theme.shadows.low
                    ]}
                />
            </div>
        </LectureContentSlide>
    )
}
