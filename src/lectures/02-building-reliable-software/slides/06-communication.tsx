import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide06Communication() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={2}>
            <h1>Коммуникация предотвращает сбои</h1>
            <div
                css={{
                    display: 'grid',
                    flex: 1,
                    gridTemplateColumns: '1.2fr 1fr',
                    gap: theme.spacing
                }}
            >
                <div>
                    <p>
                        Инженер может не узнать важное или понять информацию
                        неверно. Документация — один из способов передавать
                        знания, но не единственный.
                    </p>
                    <p>
                        Неполная, чрезмерная, непонятная или устаревшая
                        документация создаёт риск так же реально, как дефект в
                        коде.
                    </p>
                </div>
                <Panel css={theme.backgrounds.gradient('neutral')}>
                    <h2>Перед изменением</h2>
                    <p>Кто знает зависимость?</p>
                    <p>Где зафиксировано решение?</p>
                    <p>Как команда узнает об изменении?</p>
                </Panel>
            </div>
            <p>
                <strong>Иллюстрация:</strong> схема системы, где от одного
                непрочитанного сообщения обрывается нитка к зависимому сервису.
            </p>
        </LectureContentSlide>
    )
}
