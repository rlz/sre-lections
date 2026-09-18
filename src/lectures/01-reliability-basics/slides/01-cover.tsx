import { LectureCoverSlide } from '../../../components/lecture-cover-slide'
import studyingStudent from '../assets/01-studying-student.png'

export function Lecture01ReliabilityBasicsSlide01Cover() {
    return (
        <LectureCoverSlide
            number={1}
            title="Основы надёжности"
            summary="Что такое надёжность и доступность, почему их измеряют и от чего они зависят."
        >
            <img
                src={studyingStudent}
                alt="Студент начинает учиться"
                css={{
                    display: 'block',
                    width: '100%',
                    height: '38%',
                    objectFit: 'contain',
                    objectPosition: 'center top',
                    marginBottom: 12
                }}
            />
            <ul>
                <li>Знакомство</li>
                <li>Что такое надёжность?</li>
                <li>Почему с ней так сложно?</li>
                <li>Откуда берётся ненадёжность систем?</li>
                <li>Что такое доступность?</li>
                <li>Что вносит вклад в надёжность?</li>
                <li>Что такое SRE и в чём отличие от DevOps?</li>
            </ul>
        </LectureCoverSlide>
    )
}
