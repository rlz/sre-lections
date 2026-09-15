import { css } from '@emotion/react'
import { DecoratedSlide, SlideNumber } from 'rlz-web-slides'

type LectureCoverSlideProps = {
    number: number
    title: string
    summary: string
}

const content = css({
    display: 'flex',
    height: '100%',
    maxWidth: '76%',
    flexDirection: 'column',
    justifyContent: 'center'
})

const title = css({
    margin: '1.25rem 0 0',
    fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
    fontWeight: 800
})

const summary = css({
    margin: '1.5rem 0 0',
    maxWidth: '42rem',
    fontSize: 'clamp(1.25rem, 2.4vw, 2.15rem)'
})

export function LectureCoverSlide({
    number,
    title: lectureTitle,
    summary: lectureSummary
}: LectureCoverSlideProps) {
    return (
        <DecoratedSlide
            headerLeft="SRE · университетский курс"
            headerRight={`Лекция ${number}`}
            footerLeft={null}
            footerRight={<SlideNumber />}
            css={{ backgroundColor: '#102235', color: '#f4f8fc' }}
        >
            <div css={content}>
                <h1 css={title}>{lectureTitle}</h1>
                <p css={summary}>{lectureSummary}</p>
            </div>
        </DecoratedSlide>
    )
}
