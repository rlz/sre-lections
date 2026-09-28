import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture03DistributedSystemsSlide10CapProperties() {
    const theme = useSlidesTheme()
    const blocks = [
        {
            letter: 'C',
            title: 'Согласованность',
            text: 'После подтверждённой записи чтение с любого узла видит её результат.'
        },
        {
            letter: 'A',
            title: 'Доступность',
            text: 'Каждый корректный запрос к доступному узлу получает успешный ответ.'
        },
        {
            letter: 'P',
            title: 'Сетевой раздел',
            text: 'Узлы могут оказаться в группах, которые не могут обмениваться сообщениями.'
        }
    ]

    return (
        <LectureContentSlide number={3}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gridTemplateRows: '0.5fr 1.2fr',
                    height: '100%',
                    minHeight: 0,
                    padding: 0
                }}
            >
                <Panel
                    css={[
                        { gridColumn: '1', gridRow: '1 / 3' },
                        theme.backgrounds.gradient('light')
                    ]}
                />
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '1',
                        padding: theme.spacings.half
                    }}
                >
                    <h1>CAP: три свойства системы</h1>
                    <p>
                        Три свойства помогают описать поведение распределённой
                        системы.
                    </p>
                </div>
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '2',
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
                        minHeight: 0
                    }}
                >
                    <Panel
                        css={[
                            {
                                gridColumn: '1',
                                gridRow: '1 / 4',
                                margin: 4,
                                marginTop: 0
                            },
                            theme.backgrounds.gradient('accent-1')
                        ]}
                    />
                    <Panel
                        css={[
                            {
                                gridColumn: '1',
                                gridRow: '2 / 4',
                                margin: 8,
                                marginTop: 0
                            },
                            theme.backgrounds.gradient('accent-2')
                        ]}
                    />
                    <Panel
                        css={[
                            {
                                gridColumn: '1',
                                gridRow: '3',
                                margin: 12,
                                marginTop: 0
                            },
                            theme.backgrounds.gradient('accent-3')
                        ]}
                    />
                    {blocks.map((block, index) => (
                        <div
                            key={block.letter}
                            css={{
                                gridColumn: '1',
                                gridRow: `${index + 1}`,
                                padding: theme.spacings.half,
                                paddingTop: theme.spacings.compact,
                                ...(index === 2 && {
                                    color: theme.backgrounds.gradient(
                                        'accent-3'
                                    ).color
                                })
                            }}
                        >
                            <h2>
                                {block.letter} · {block.title}
                            </h2>
                            <p>{block.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </LectureContentSlide>
    )
}
