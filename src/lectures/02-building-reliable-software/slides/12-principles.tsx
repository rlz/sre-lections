import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide12Principles() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={2}>
            <h1>Приоритет production</h1>
            <div
                css={{
                    display: 'grid',
                    flex: 1,
                    gridTemplateColumns: '1fr 1fr',
                    gap: theme.spacing
                }}
            >
                <Panel css={theme.backgrounds.gradient('accent-3')}>
                    <h2>Надежда — не стратегия</h2>
                    <p>
                        Если риск уже понятен, нужны наблюдаемость, решение и
                        подготовленный ответ.
                    </p>
                </Panel>
                <Panel css={theme.backgrounds.gradient('accent-1')}>
                    <h2>Пользовательская проблема выше планов</h2>
                    <p>
                        Когда production нарушает обещанный результат, команда
                        может отложить остальные задачи и заняться
                        восстановлением.
                    </p>
                </Panel>
            </div>
        </LectureContentSlide>
    )
}
