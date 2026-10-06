import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import loadTesting from '../assets/14-load-testing.jpg'

export function Lecture04ReliableArchitectureSlide14LoadTesting() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                padding={0}
                css={[
                    {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: '0.5fr 0.3fr 3fr 1fr',
                        // rowGap: 4,
                        height: '100%'
                    },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <Panel
                    css={[
                        { gridColumn: '1 / 3', gridRow: '3', margin: 4 },
                        theme.backgrounds.gradient('accent-1')
                    ]}
                />
                <Panel
                    css={[
                        {
                            gridColumn: '1 / 3',
                            gridRow: '4',
                            margin: 4,
                            marginTop: 0
                        },
                        theme.backgrounds.gradient('accent-2')
                    ]}
                />
                <div
                    css={{
                        gridColumn: '1 / 3',
                        gridRow: '1',
                        padding: theme.spacings.half
                    }}
                >
                    <h1>Как тестировать работу под нагрузкой</h1>
                </div>

                <div
                    css={{
                        gridColumn: 1,
                        gridRow: '3',
                        padding: theme.spacings.half
                    }}
                >
                    <h2>Нагрузочный тест проверяет три режима</h2>
                    <ol>
                        <li>
                            Рабочий максимум: система выполняет расчётную
                            нагрузку
                        </li>
                        <li>
                            Пик в 3–5 раз выше: система ограничивает нагрузку и
                            отказывает предсказуемо
                        </li>
                        <li>
                            Возврат к норме: сервис восстанавливается за
                            приемлемое время
                        </li>
                    </ol>
                </div>
                <div
                    css={{
                        gridColumn: 1,
                        gridRow: '4',
                        padding: theme.spacings.half
                    }}
                >
                    <p>
                        Проверьте запуск под нагрузкой: кэш может быть пуст,
                        инициализация — медленной
                    </p>
                </div>
                <div
                    css={{
                        gridColumn: '2',
                        gridRow: '2 / 5',
                        margin: 8,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end'
                    }}
                >
                    <img
                        src={loadTesting}
                        alt="Временная диаграмма: рабочий максимум, пик нагрузки в 3–5 раз и восстановление"
                        css={{
                            width: '100%',
                            borderRadius: theme.radius,
                            ...theme.shadows.low
                        }}
                    />
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
