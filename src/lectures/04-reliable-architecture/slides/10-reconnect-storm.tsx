import { useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import reconnectStormImage from '../assets/10-reconnect-storm.jpg'

export function Lecture04ReliableArchitectureSlide10ReconnectStorm() {
    const theme = useSlidesTheme()
    return (
        <LectureContentSlide number={4}>
            <img
                src={reconnectStormImage}
                alt="Неподвижные банкоматы в разных местах звонят серверу по смартфонам, пока клиенты ждут ответа; в датацентре сервер лежит на полу среди звонящих смартфонов"
                css={{
                    boxSizing: 'border-box',
                    borderRadius: theme.radius,
                    ...theme.shadows.low,
                    display: 'block'
                }}
            />
        </LectureContentSlide>
    )
}
