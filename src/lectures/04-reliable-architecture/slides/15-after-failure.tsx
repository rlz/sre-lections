import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide15AfterFailure() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                css={[
                    { height: '100%', width: '100%', padding: 0 },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <h1>Инструменты для работы с последствиями</h1>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        height: '100%'
                    }}
                >
                    <ul css={{ padding: theme.spacings.half }}>
                        <li>Инструменты поиска пострадавших</li>
                        <li>
                            Инстументы сверки данных с соседними системами и
                            партнерами
                        </li>
                        <li>Инструменты внесения исправлений в данные</li>
                        <li>Инструменты очистки очередей</li>
                    </ul>
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
                        <br />
                        `Пожарная тренировка, команда заранее отрабатывает
                        действия по сигналу.`
                    </div>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
