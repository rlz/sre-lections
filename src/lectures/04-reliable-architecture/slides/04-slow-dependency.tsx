import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide04SlowDependency() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                css={[
                    { height: '100%', width: '100%', padding: 0 },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <h1>Зависимость отвечает медленно</h1>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '0.9fr 1.1fr',
                        gap: theme.spacing,
                        height: '100%'
                    }}
                >
                    <div
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: theme.spacings.half
                        }}
                    >
                        <p>
                            При прежней нагрузке ответ за 8 мс вместо 5 мс
                            дольше занимает соединение
                        </p>
                        <p>
                            Одновременно выполняется больше запросов; растут
                            очередь и занятый пул
                        </p>
                    </div>
                    <div
                        css={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            minHeight: 180,
                            padding: 16,
                            boxSizing: 'border-box',
                            borderRadius: 8,
                            background: '#d8d2f0',
                            color: '#343044',
                            textAlign: 'center'
                        }}
                    >
                        <strong>Иллюстрация будет здесь</strong>
                        <span>
                            `Схема из двух одинаковых горизонтальных потоков
                            запросов. Сверху подпись «Ответ за 5 мс»: короткие
                            занятые интервалы, небольшая очередь и несколько
                            свободных соединений. Снизу подпись «Ответ за 8 мс»:
                            те же входящие запросы, более длинные занятые
                            интервалы, заметно большая очередь и почти
                            заполненный пул.`
                        </span>
                    </div>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
