import { useSlidesTheme } from 'rlz-web-slides'
import closingIllustration from '../assets/dmitry-maslennikov-questions.png'
import { LectureContentSlide } from './lecture-content-slide'

interface LectureClosingSlideProps {
    number: number
}

export function LectureClosingSlide({ number }: LectureClosingSlideProps) {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={number}>
            <div
                css={{
                    display: 'grid',
                    height: '100%',
                    gridTemplateColumns: '1fr 1fr',
                    gap: theme.spacing,
                    alignItems: 'center'
                }}
            >
                <div>
                    <h1>На этом пока все! Вопросы?</h1>
                </div>
                <div
                    css={{
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <img
                        src={closingIllustration}
                        alt="Дмитрий Масленников приглашает задавать вопросы"
                        css={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain'
                        }}
                    />
                </div>
            </div>
        </LectureContentSlide>
    )
}
