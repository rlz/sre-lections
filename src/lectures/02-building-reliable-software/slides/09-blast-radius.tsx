import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide09BlastRadius() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={2}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: theme.spacing,
                    height: '100%'
                }}
            >
                <div>
                    <h1>Масштаб влияния</h1>
                    <p>
                        Полностью избежать отказов не получится. Поэтому сервис
                        полезно строить так, чтобы при проблеме страдали не все
                        пользователи и не все функции.
                    </p>
                    <p>
                        Вопрос для проектирования: где остановится проблема,
                        если один компонент работает неправильно?
                    </p>
                </div>
                <Panel css={theme.backgrounds.gradient('accent-1')}>
                    <h2>Граница отказа</h2>
                    <p>
                        Выделяем независимые части, ограничиваем распространение
                        ошибки и сохраняем важные пользовательские сценарии.
                    </p>
                    <p>
                        <strong>Иллюстрация:</strong> многоквартирный дом с
                        перегоревшим светом в одной секции; в соседних окнах
                        свет есть благодаря отдельным щиткам.
                    </p>
                </Panel>
            </div>
        </LectureContentSlide>
    )
}
