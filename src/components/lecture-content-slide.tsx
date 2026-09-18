import { css } from '@emotion/react'
import type { Interpolation, Theme } from '@emotion/react'
import type { ReactNode } from 'react'
import { DecoratedSlide, SlideNumber, useSlidesTheme } from 'rlz-web-slides'

type LectureContentSlideProps = {
    number: number
    css?: Interpolation<Theme>
    children: ReactNode
}

export function LectureContentSlide({
    number,
    css: slideCss,
    children
}: LectureContentSlideProps) {
    const theme = useSlidesTheme()
    const content = css({
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '1rem 0 1rem'
    })
    return (
        <DecoratedSlide
            headerLeft="SRE · университетский курс"
            headerRight={`Лекция ${number}`}
            footerLeft={null}
            footerRight={<SlideNumber />}
            css={[
                theme.backgrounds.solid('neutral'),
                theme.typography,
                slideCss
            ]}
        >
            <div css={content}>{children}</div>
        </DecoratedSlide>
    )
}
