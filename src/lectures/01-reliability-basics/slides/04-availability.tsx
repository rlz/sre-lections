import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture01ReliabilityBasicsSlide04Availability() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={1}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '1fr',
                    columnGap: theme.spacing,
                    height: '100%'
                }}
            >
                <div css={{ gridRow: '1', gridColumn: '1' }}>
                    <h1>Доступность</h1>
                    <p>
                        Наши сервисы, которые обладали какой-то надежностью с
                        учетом обстоятельств и везения работали какое-то время.
                        Мы можем записать историю этой работы и назовем ее
                        доступностью.
                    </p>
                    <p>
                        Доступность можно измерять разными методами: по времени
                        без нарушения, количество успешных операций или по
                        какой-нибудь сложной методике. Обычно выражают в
                        процентах. Но что это за проценты — зависит от
                        примененного метода.
                    </p>
                    <p
                        css={{
                            fontSize: '4em',
                            color: theme.colors.muted,
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}
                    >
                        99.99%
                    </p>
                </div>
                <Panel css={{ gridRow: '1', gridColumn: '2' }}>
                    <h2 css={{ marginBottom: 0 }}>
                        Факторы, влияющие на доступность
                    </h2>
                    <p
                        css={{
                            fontSize: '0.9em',
                            margin: '0.5em 0 1.2em 0 !important'
                        }}
                    >
                        (и не относящиеся к надежности)
                    </p>
                    <ul>
                        <li>то, что мы включили в измеряемую услугу</li>
                        <li>за какой период времени мы измеряем</li>
                        <li>что договорились считать успешной работой</li>
                        <li>какую методологию подсчета выбрали</li>
                    </ul>
                </Panel>
            </div>
        </LectureContentSlide>
    )
}
