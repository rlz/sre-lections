import { css } from '@emotion/react'
import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from './lecture-content-slide'

const feedbackUrl = 'https://polls.tbank.ru/s/cmg0ms4jc00364ux04rawaq2v'
const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=640x640&format=svg&color=102235&bgcolor=ffffff&margin=0&data=${encodeURIComponent(feedbackUrl)}`

interface LectureFeedbackSlideProps {
    number: number
}

export function LectureFeedbackSlide({ number }: LectureFeedbackSlideProps) {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={number}>
            <div
                css={css({
                    display: 'grid',
                    height: '100%',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '1fr',
                    gap: 0,
                    padding: 0
                })}
            >
                <Panel
                    shadow={false}
                    css={{
                        gridColumn: '1 / 3',
                        gridRow: '1',
                        padding: 0
                    }}
                />
                <Panel
                    css={[
                        theme.backgrounds.gradient('accent-1'),
                        {
                            gridColumn: '1',
                            gridRow: '1',
                            display: 'flex',
                            alignItems: 'center',
                            margin: 4
                        }
                    ]}
                >
                    <h1 css={{ margin: 0 }}>
                        Поделитесь впечатлениями о лекции
                    </h1>
                </Panel>
                <div
                    css={{
                        gridColumn: '2',
                        gridRow: '1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <img
                        src={qrCodeUrl}
                        alt="QR-код для формы обратной связи о лекции"
                        css={{
                            display: 'block',
                            width: 'min(80%, 360px)',
                            height: 'auto'
                        }}
                    />
                </div>
            </div>
        </LectureContentSlide>
    )
}
