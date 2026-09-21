import { Panel } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import shipCompartments from '../assets/06-ship-compartments.png'

export function Lecture02BuildingReliableSoftwareSlide06BlastRadius() {
    return (
        <LectureContentSlide number={2}>
            <Panel>
                <h1>Масштаб влияния</h1>
                <p>
                    Сервис полезно строить так, чтобы при проблеме страдали не
                    все пользователи и не все функции. Меньше пострадавших —
                    меньше сбой.
                </p>
                <img
                    src={shipCompartments}
                    alt="Корабль в разрезе с затопленным отсеком и герметичными переборками"
                    css={{
                        width: '100%'
                    }}
                />
            </Panel>
        </LectureContentSlide>
    )
}
