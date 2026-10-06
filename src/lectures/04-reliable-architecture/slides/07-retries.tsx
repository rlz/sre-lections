import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import retriesImage from '../assets/07-retries.jpg'

export function Lecture04ReliableArchitectureSlide07Retries() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                padding={0}
                css={[
                    {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: '0.6fr 0.5fr 1fr 1fr',
                        height: '100%',
                        columnGap: theme.spacings.base
                    },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <Panel
                    css={[
                        { gridColumn: '1 / 3', gridRow: '3 / 5', margin: 4 },
                        theme.backgrounds.gradient('accent-1')
                    ]}
                />
                <Panel
                    css={[
                        {
                            gridColumn: '1 / 3',
                            gridRow: '4',
                            margin: 8,
                            marginTop: 0
                        },
                        theme.backgrounds.gradient('dark')
                    ]}
                />
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '1',
                        padding: theme.spacings.half
                    }}
                >
                    <h1>Повторы операций</h1>
                </div>
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '3',
                        padding: theme.spacings.half
                    }}
                >
                    <p>Используют при единичных временных ошибках</p>
                    <p>
                        При общем сбое повторы удваивают нагрузку на уже больную
                        систему
                    </p>
                </div>
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '4',
                        padding: theme.spacings.half,
                        color: theme.colors.textDark
                    }}
                >
                    <p>
                        <strong>
                            Повторяйте только временные ошибки и только
                            идемпотентные операции
                        </strong>
                    </p>
                    <p>
                        Ограничьте число попыток и добавьте случайную задержку
                    </p>
                </div>
                <img
                    src={retriesImage}
                    alt="Толпа без очереди теснится у кассы, а растерянный сотрудник не успевает обслуживать посетителей"
                    css={{
                        gridColumn: '2',
                        gridRow: '2 / 5',
                        display: 'block',
                        width: 'calc(100% - 24px)',
                        height: 'auto',
                        alignSelf: 'center',
                        margin: 12,
                        borderRadius: theme.radius,
                        ...theme.shadows.low,
                        background: '#d8d2f0'
                    }}
                />
            </Panel>
        </LectureContentSlide>
    )
}
