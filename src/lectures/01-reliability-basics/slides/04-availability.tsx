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
                        Доступность показывает, насколько сервис готов выполнять
                        свою функцию. По истории его работы можно оценить
                        фактическую доступность за выбранный период.
                    </p>
                    <p>
                        Доступность можно оценивать по доле времени без
                        нарушений, по доле успешных операций или по другой
                        согласованной методике. Смысл процентов зависит от
                        выбранного метода.
                    </p>
                    <p
                        css={{
                            fontSize: '4em',
                            color: theme.colors.muted,
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}
                    >
                        99,99 %
                    </p>
                </div>
                <Panel css={{ gridRow: '1', gridColumn: '2' }}>
                    <h2 css={{ marginBottom: 0 }}>
                        Что влияет на оценку доступности
                    </h2>
                    <p
                        css={{
                            fontSize: '0.9em',
                            margin: '0.5em 0 1.2em 0 !important'
                        }}
                    >
                        (условия измерения)
                    </p>
                    <ul>
                        <li>что мы включили в измеряемую услугу</li>
                        <li>за какой период мы считаем</li>
                        <li>что договорились считать успешной работой</li>
                        <li>какую методологию подсчёта выбрали</li>
                    </ul>
                </Panel>
            </div>
        </LectureContentSlide>
    )
}
