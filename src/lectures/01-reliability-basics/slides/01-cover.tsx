import { LectureCoverSlide } from '../../../components/lecture-cover-slide'
import { useSlidesTheme } from 'rlz-web-slides'
import studyingStudent from '../assets/01-studying-student.png'

export function Lecture01ReliabilityBasicsSlide01Cover() {
    const theme = useSlidesTheme()

    return (
        <LectureCoverSlide
            number={1}
            title="Основные понятия"
            summary="Что такое надёжность и доступность, почему их измеряют и от чего они зависят."
            panelPadding={0}
        >
            <div
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '100%'
                }}
            >
                <img
                    src={studyingStudent}
                    alt="Студент начинает учиться"
                    css={[
                        {
                            display: 'block',
                            width: 'calc(100% - 8px)',
                            maxHeight: 275,
                            borderRadius: theme.radius,
                            margin: 4
                        },
                        theme.shadows.medium
                    ]}
                />
                <div css={{ width: '100%', padding: theme.spacings.half }}>
                    <ul css={{ margin: 0 }}>
                        <li>Знакомство</li>
                        <li>Что такое надёжность?</li>
                        <li>Почему с ней так сложно?</li>
                        <li>Откуда берётся ненадёжность систем?</li>
                        <li>Что такое доступность?</li>
                        <li>Что вносит вклад в надёжность?</li>
                        <li>Что такое SRE и в чём отличие от DevOps?</li>
                    </ul>
                </div>
            </div>
        </LectureCoverSlide>
    )
}
