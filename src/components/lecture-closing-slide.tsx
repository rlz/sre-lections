import { useSlidesTheme } from 'rlz-web-slides'
import closingIllustration from '../assets/dmitry-maslennikov-questions.png'
import { LectureContentSlide } from './lecture-content-slide'

interface LectureClosingSlideProps {
    number: number
    illustration?: string | null
    illustrationAlt?: string
}

export function LectureClosingSlide({
    number,
    illustration = closingIllustration,
    illustrationAlt = 'Дмитрий Масленников приглашает задавать вопросы'
}: LectureClosingSlideProps) {
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
                <div
                    css={{
                        alignSelf: 'end',
                        paddingBottom: theme.spacings.half
                    }}
                >
                    <h1>На этом пока всё! Вопросы?</h1>
                </div>
                <div
                    css={{
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {illustration ? (
                        <img
                            src={illustration}
                            alt={illustrationAlt}
                            css={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                width: 'auto',
                                height: 'auto'
                            }}
                        />
                    ) : (
                        <div
                            aria-label="Место для иллюстрации"
                            css={{ width: '100%', height: '100%' }}
                        />
                    )}
                </div>
            </div>
        </LectureContentSlide>
    )
}
