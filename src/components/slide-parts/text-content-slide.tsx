import type { ReactNode } from 'react'
import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../lecture-content-slide'

export interface TextContentBlock {
    title: string
    body: ReactNode
}

interface TextContentSlideProps {
    lectureNumber: number
    title: string
    lead: string
    blocks: TextContentBlock[]
}

export function TextContentSlide({
    lectureNumber,
    title,
    lead,
    blocks
}: TextContentSlideProps) {
    const theme = useSlidesTheme()
    const columns = blocks.length === 3 || blocks.length === 5 ? 3 : 2

    return (
        <LectureContentSlide number={lectureNumber}>
            <Panel
                padding={0}
                css={{
                    display: 'grid',
                    gridTemplateRows: 'auto 1fr',
                    height: '100%',
                    minHeight: 0
                }}
            >
                <div css={{ padding: theme.spacings.half }}>
                    <h1>{title}</h1>
                    <p css={{ fontSize: '1.15em', marginBottom: 0 }}>{lead}</p>
                </div>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                        gridTemplateRows: `repeat(${Math.ceil(blocks.length / columns)}, minmax(0, 1fr))`,
                        gap: theme.spacings.tight,
                        padding: 4,
                        minHeight: 0
                    }}
                >
                    {blocks.map((block, index) => (
                        <Panel
                            key={block.title}
                            css={[
                                theme.backgrounds.gradient(
                                    `accent-${(index % 3) + 1}`
                                ),
                                {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    margin: 4,
                                    padding: theme.spacings.half,
                                    minWidth: 0
                                }
                            ]}
                        >
                            <h2>{block.title}</h2>
                            <div>{block.body}</div>
                        </Panel>
                    ))}
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
