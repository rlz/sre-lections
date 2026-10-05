import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide14LoadTesting() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                css={[
                    { height: '100%', width: '100%', padding: 0 },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <h1>Как тестировать работу под нагрузкой</h1>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: theme.spacing,
                        height: '100%'
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
                            `Использовать простую временную диаграмму:
                            горизонтальная ось времени, вертикальная ось
                            нагрузки; три подписанных участка — рабочий
                            максимум, пик 3–5×, восстановление на рабочем
                            уровне.`
                        </span>
                    </div>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
