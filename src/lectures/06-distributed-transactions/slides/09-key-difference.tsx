import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture06DistributedTransactionsSlide09KeyDifference() {
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
                    <h1>Два способа согласовать изменения</h1>
                </div>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: '1fr auto',
                        flex: 1,
                        minHeight: 0,
                        padding: 0
                    }}
                >
                    <Panel
                        css={[
                            {
                                gridColumn: '1 / 3',
                                gridRow: '1 / 3',
                                margin: 4
                            },
                            theme.backgrounds.gradient('accent-1')
                        ]}
                    />
                    <Panel
                        css={[
                            { gridColumn: '2', gridRow: '1 / 3', margin: 8 },
                            theme.backgrounds.gradient('accent-2')
                        ]}
                    />
                    <div
                        css={{
                            gridColumn: '1',
                            gridRow: '1',
                            padding: theme.spacings.half
                        }}
                    >
                        <h2>Двухфазный коммит</h2>
                        <p>Подготовка → общее решение → фиксация</p>
                    </div>
                    <div
                        css={{
                            gridColumn: '2',
                            gridRow: '1',
                            padding: theme.spacings.half
                        }}
                    >
                        <h2>Сага</h2>
                        <p>Локальные шаги → компенсация при ошибке</p>
                    </div>
                    <p
                        css={{
                            gridColumn: '1 / 3',
                            gridRow: '2',
                            padding: theme.spacings.half
                        }}
                    >
                        Для обоих подходов заранее продумайте сбои, повторы и
                        состояние процесса.
                    </p>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
