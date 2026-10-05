import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import blackSwan from '../assets/08-black-swan.jpg'

export function Lecture02FailuresAndReliabilityPrinciplesSlide11BlackSwan() {
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
                        Чёрный лебедь
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
                    <div css={{ padding: theme.spacings.half, flex: 1 }}>
                        <p>
                            Неожиданное для наблюдателя событие с огромными
                            последствиями. Его трудно предвидеть на основе
                            прошлого опыта, но можно готовиться к неизвестному.
                        </p>
                    </div>
                    <img
                        src={blackSwan}
                        alt="Чёрный лебедь в штормовом море"
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
