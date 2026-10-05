import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide14LoadTesting() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr)',
                    gridTemplateRows: 'auto minmax(0, 1fr)',
                    height: '100%',
                    minHeight: 0
                }}
            >
                <Panel
                    css={[
                        { gridColumn: '1', gridRow: '1 / 3' },
                        theme.backgrounds.gradient('light')
                    ]}
                />
                <h1
                    css={{
                        gridColumn: '1',
                        gridRow: '1',
                        padding: theme.spacings.half
                    }}
                >
                    Как тестировать работу под нагрузкой
                </h1>
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '2',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: theme.spacing,
                        minHeight: 0
                    }}
                >
                    <div>
                        <Panel
                            css={[
                                { margin: 4 },
                                theme.backgrounds.gradient('accent-1')
                            ]}
                        >
                            <h2>Нагрузочный тест проверяет три режима</h2>
                            <ol>
                                <li>
                                    Рабочий максимум: система выполняет
                                    расчётную нагрузку
                                </li>
                                <li>
                                    Пик в 3–5 раз выше: система ограничивает
                                    нагрузку и отказывает предсказуемо
                                </li>
                                <li>
                                    Возврат к норме: сервис восстанавливается за
                                    приемлемое время
                                </li>
                            </ol>
                        </Panel>
                        <p css={{ padding: theme.spacings.half }}>
                            Проверьте запуск под нагрузкой: кэш может быть пуст,
                            инициализация — медленной
                        </p>
                    </div>
                    <div
                        css={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 'calc(100% - 8px)',
                            minHeight: 180,
                            padding: 16,
                            boxSizing: 'border-box',
                            margin: 4,
                            borderRadius: theme.radius,
                            ...theme.shadows.low,
                            background: '#d8d2f0',
                            color: '#343044',
                            textAlign: 'center'
                        }}
                    >
                        <strong>Иллюстрация будет здесь</strong>
                        <span>
                            `Использовать простую временную диаграмму:
                            горизонтальная ось времени, вертикальная ось
                            нагрузки; три подписанных участка — рабочий
                            максимум, пик 3–5×, восстановление на рабочем
                            уровне.`
                        </span>
                    </div>
                </div>
            </div>
        </LectureContentSlide>
    )
}
