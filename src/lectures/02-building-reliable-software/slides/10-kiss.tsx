import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import kissBand from '../assets/09-kiss-band.png'

export function Lecture02BuildingReliableSoftwareSlide10Kiss() {
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
                        KISS
                    </p>
                </div>
                <Panel
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        padding: 0
                    }}
                >
                    <div
                        css={{
                            padding: theme.spacings.half,
                            paddingBottom: 0,
                            flex: 1
                        }}
                    >
                        <p>
                            <strong>KISS — Keep It Simple, Stupid.</strong>{' '}
                            Выбирайте самое простое решение, которое решает
                            задачу.
                        </p>
                        <p>
                            Простота — не «сделать наспех». Не добавляйте
                            сложность без понятной пользы: простую систему легче
                            понять, проверить и починить в аварии.
                        </p>
                    </div>
                    <img
                        src={kissBand}
                        alt="Музыканты в сценическом гриме KISS"
                        css={[
                            {
                                display: 'block',
                                width: 'calc(100% - 8px)',
                                margin: 4,
                                borderRadius: theme.radius
                            },
                            theme.shadows.low
                        ]}
                    />
                </Panel>
            </div>
        </LectureContentSlide>
    )
}
