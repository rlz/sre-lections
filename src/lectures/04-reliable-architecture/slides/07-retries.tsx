import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide07Retries() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                css={[
                    { height: '100%', width: '100%', padding: 0 },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <h1>Повтор помогает при единичной временной ошибке</h1>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: theme.spacing,
                        height: '100%'
                    }}
                >
                    <div
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        <p css={{ padding: theme.spacings.half }}>
                            При общем сбое повторы удваивают нагрузку на уже
                            больную систему
                        </p>
                        <Panel
                            css={[
                                { margin: 4 },
                                theme.backgrounds.gradient('accent-1')
                            ]}
                        >
                            <strong>
                                Повторяйте только временные ошибки и только
                                идемпотентные операции
                            </strong>
                            <br />
                            Ограничьте число попыток и добавьте случайную
                            задержку
                        </Panel>
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
                            `Толпа у кассы. Все рвутся получить услугу. Никакой
                            очереди и оргинизации. Сотрудник растерен и не может
                            никого обслуживать.`
                        </span>
                    </div>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
