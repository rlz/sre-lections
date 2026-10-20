import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture06DistributedTransactionsSlide08ReliableOrchestration() {
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
                    <h1>Координатор должен пережить собственный сбой</h1>
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
                    {[
                        [
                            'Сохраняйте состояние',
                            'Записывайте состояние саги и результат каждого шага.'
                        ],
                        [
                            'Делайте шаги повторяемыми',
                            'Повторный запуск не должен повторять эффект.'
                        ],
                        [
                            'Продумайте компенсации',
                            'Для действий с побочными эффектами задайте обратный бизнес-шаг.'
                        ]
                    ].map(([title, body], index) => (
                        <div
                            key={title}
                            css={{
                                gridColumn: `${index + 1}`,
                                gridRow: '1',
                                padding: theme.spacings.half
                            }}
                        >
                            <h2>{title}</h2>
                            <p>{body}</p>
                        </div>
                    ))}
                    <p
                        css={{
                            gridColumn: '1 / 4',
                            gridRow: '2',
                            padding: theme.spacings.half
                        }}
                    >
                        После перезапуска координатор продолжает с последнего
                        подтверждённого состояния.
                    </p>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
