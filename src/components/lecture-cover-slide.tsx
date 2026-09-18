import { css } from '@emotion/react'
import type { PropsWithChildren } from 'react'
import {
    DecoratedSlide,
    Panel,
    SlideNumber,
    useSlidesTheme
} from 'rlz-web-slides'

interface LectureCoverSlideProps extends PropsWithChildren {
    number: number
    title: string
    summary: string
}

export function LectureCoverSlide({
    number,
    title: lectureTitle,
    summary: lectureSummary,
    children
}: LectureCoverSlideProps) {
    const theme = useSlidesTheme()
    const content = css({
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center'
    })

    return (
        <DecoratedSlide
            headerLeft="SRE · университетский курс"
            headerRight={`Лекция ${number}`}
            footerLeft={null}
            footerRight={<SlideNumber />}
            css={css(theme.backgrounds.solid('neutral'), theme.typography)}
        >
            <div
                css={{
                    display: 'grid',
                    height: '100%',
                    gridTemplateColumns: '1fr 1fr',
                    gap: theme.spacing
                }}
            >
                <div css={content}>
                    <h1>{lectureTitle}</h1>
                    <p css={{ marginTop: 40 }}>{lectureSummary}</p>
                </div>
                <Panel css={{ gridColumn: '2' }}>{children}</Panel>
            </div>
        </DecoratedSlide>
    )
}
