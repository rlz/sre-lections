import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture06DistributedTransactionsSlide05Saga() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={6}>
            <Panel
                padding={0}
                css={[
                    {
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <div css={{ padding: theme.spacings.half }}>
                    <h1>Сага — цепочка локальных транзакций</h1>
                    <p>Каждый шаг выполняется в своём сервисе.</p>
                </div>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gridTemplateRows: '1fr auto',
                        flex: 1,
                        minHeight: 0,
                        padding: 0
                    }}
                >
                    <Panel
                        css={[
                            {
                                gridColumn: '1 / 4',
                                gridRow: '1 / 3',
                                margin: 4
                            },
                            theme.backgrounds.gradient('accent-1')
                        ]}
                    />
                    <Panel
                        css={[
                            { gridColumn: '3', gridRow: '1 / 3', margin: 8 },
                            theme.backgrounds.gradient('accent-2')
                        ]}
                    />
                    {[
                        'Заказ создан',
                        'Оплата прошла',
                        'Доставка не оформлена'
                    ].map((label, index) => (
                        <div
                            key={label}
                            css={{
                                gridColumn: `${index + 1}`,
                                gridRow: '1',
                                padding: theme.spacings.half,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}
                        >
                            <h2>{label}</h2>
                        </div>
                    ))}
                    <p
                        css={{
                            gridColumn: '1 / 4',
                            gridRow: '2',
                            padding: theme.spacings.half,
                            textAlign: 'center'
                        }}
                    >
                        Компенсация исправляет бизнес-эффект, а не стирает
                        прошлое.
                    </p>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
