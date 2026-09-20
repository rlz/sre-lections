import { Slide } from 'rlz-web-slides'
import sreVsDevops from '../assets/08-sre-vs-devops.png'

export function Lecture01ReliabilityBasicsSlide08SreAndDevops() {
    return (
        <Slide css={{ padding: 0 }}>
            <img
                src={sreVsDevops}
                alt="SRE и DevOps как инженеры на экране противостояния"
                css={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
        </Slide>
    )
}
