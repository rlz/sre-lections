import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide04DirectCost() {
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
                    <h1>Прямые потери</h1>
                    <p>
                        Упущенные операции и время команды можно оценить. Это
                        полезная часть картины, но короткий сбой занимает малую
                        долю года.
                    </p>
                    <p>
                        После восстановления часть пользователей завершит
                        отложенное действие. Поэтому расчёт не равен полной цене
                        сбоя.
                    </p>
                </div>
                <Panel css={theme.backgrounds.gradient('accent-3')}>
                    <p css={{ fontSize: '3em', fontWeight: 'bold' }}>
                        1 час = 0,0114 % года
                    </p>
                    <p>
                        Даже точный расчёт за этот час не скажет, что произойдёт
                        с доверием к сервису позднее.
                    </p>
                </Panel>
            </div>
        </LectureContentSlide>
    )
}
