import { LectureCoverSlide } from '../../../components/lecture-cover-slide'

export function Lecture06DistributedTransactionsSlide01Cover() {
    return (
        <LectureCoverSlide
            number={6}
            title="Распределённые транзакции"
            summary="Двухфазный коммит, саги, идемпотентность и оркестрация процессов."
        />
    )
}
