import { LectureCoverSlide } from '../../../components/lecture-cover-slide'

export function Lecture08ReplicationSlide01Cover() {
    return (
        <LectureCoverSlide
            number={8}
            title="Репликация данных"
            summary="Цели репликации, лидер, лаг, консистентность и многомастерные схемы."
        />
    )
}
