import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02FailuresAndReliabilityPrinciplesSlide03DirectCost() {
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
                        Стоимость несостоявшихся операций и времени команды
                        можно оценить. Но доля простоя в году не равна доле
                        финансовых потерь.
                    </p>
                    <p
                        css={{
                            fontSize: '1.8em',
                            color: theme.colors['dark'],
                            fontWeight: 'bold'
                        }}
                    >
                        1 час ≈ 0,0114 % года
                    </p>
                    <p>
                        После восстановления часть пользователей завершит
                        отложенные действия. Это уменьшит потери от
                        несостоявшихся операций.
                    </p>
                    <p>
                        Прямые потери зависят от времени сбоя, нагрузки и
                        затронутых операций.
                    </p>
                </div>
                <Panel css={theme.backgrounds.gradient('accent-3')}>
                    <h1>Репутационные потери</h1>
                    <p>
                        Даже точный расчёт за этот час не скажет, что произойдёт
                        с доверием к сервису позднее.
                    </p>
                    <p>
                        Репутационные потери труднее оценить, и они могут
                        превысить прямые. Пользователи и партнёры ожидают
                        определённого уровня надёжности.
                    </p>
                </Panel>
            </div>
        </LectureContentSlide>
    )
}
