import { css } from '@emotion/react'
import type { ReactNode } from 'react'
import { DecoratedSlide, SlideNumber, useSlidesTheme } from 'rlz-web-slides'

type LectureContentSlideProps = {
    number: number
    title: string
    children: ReactNode
}

export function LectureContentSlide({
    number,
    title: slideTitle,
    children
}: LectureContentSlideProps) {
    const theme = useSlidesTheme()
    const content = css({
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '1.5rem 0 2.5rem'
    })
    const title = css({
        maxWidth: '78%',
        margin: '0 0 2.8rem'
    })

    return (
        <DecoratedSlide
            headerLeft="SRE · университетский курс"
            headerRight={`Лекция ${number}`}
            footerLeft={null}
            footerRight={<SlideNumber />}
            css={theme.backgrounds.solid('light')}
        >
            <div css={content}>
                <h1 css={[title, { color: theme.colors.textLight }]}>
                    {slideTitle}
                </h1>
                {children}
            </div>
        </DecoratedSlide>
    )
}
