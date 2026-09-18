import { LectureCoverSlide } from '../../../components/lecture-cover-slide'
import studyingStudent from '../assets/01-studying-student.png'

export function Lecture01ReliabilityBasicsSlide01Cover() {
    return (
        <LectureCoverSlide
            number={1}
            title="Основные понятия"
            summary="Что такое надёжность и доступность, почему их измеряют и от чего они зависят."
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
                    css={{
                        maxHeight: 320
                    }}
                />
                <ul css={{ width: '100%' }}>
                    <li>Знакомство</li>
                    <li>Что такое надёжность?</li>
                    <li>Почему с ней так сложно?</li>
                    <li>Откуда берётся ненадёжность систем?</li>
                    <li>Что такое доступность?</li>
                    <li>Что вносит вклад в надёжность?</li>
                    <li>Что такое SRE и в чём отличие от DevOps?</li>
                </ul>
            </div>
        </LectureCoverSlide>
    )
}
