import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture03DistributedSystemsSlide06WhatItMeansForASystemToAgree() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={3}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: '1.1fr 1fr',
                    height: '100%',
                    minHeight: 0,
                    padding: 0
                }}
            >
                <Panel
                    css={[
                        { gridRow: '1 / 3', gridColumn: '1 / 4' },
                        theme.backgrounds.gradient('light')
                    ]}
                />
                <div
                    css={{
                        gridColumn: '1 / 4',
                        gridRow: '1',
                        padding: theme.spacings.half,
                        margin: 4,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <h1>Что значит «договориться» для системы</h1>
                    <p>
                        Несколько узлов должны принять{' '}
                        <strong>одно и то же решение</strong>, даже если
                        обмениваются сообщениями через сеть.
                    </p>
                </div>
                <Panel
                    css={[
                        { gridColumn: '1 / 4', gridRow: '2', margin: 4 },
                        theme.backgrounds.gradient('accent-1')
                    ]}
                />
                <Panel
                    css={[
                        {
                            gridColumn: '2 / 4',
                            gridRow: '2',
                            margin: 8
                        },
                        theme.backgrounds.gradient('accent-2')
                    ]}
                />
                <Panel
                    css={[
                        {
                            gridColumn: '3',
                            gridRow: '2',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            margin: 12,
                            padding: theme.spacings.half
                        },
                        theme.backgrounds.gradient('accent-3')
                    ]}
                >
                    <h2>Общее решение</h2>
                    <p>
                        Узлы, принявшие решение, должны выбрать одно значение.
                        Исправные узлы должны в итоге получить результат.
                    </p>
                </Panel>
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '2',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        margin: 8,
                        padding: theme.spacings.half
                    }}
                >
                    <h2>Выбрать исполнителя</h2>
                    <p>
                        Все узлы должны считать, что задачу выполняет один и тот
                        же узел.
                    </p>
                </div>
                <div
                    css={{
                        gridColumn: '2',
                        gridRow: '2',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        margin: 8,
                        padding: theme.spacings.half
                    }}
                >
                    <h2>Изменить счётчик</h2>
                    <p>
                        Если запросы пришли в разные узлы, система решает, какие
                        изменения учесть и в каком порядке.
                    </p>
                </div>
            </div>
        </LectureContentSlide>
    )
}
