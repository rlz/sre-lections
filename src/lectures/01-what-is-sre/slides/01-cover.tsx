import { css } from '@emotion/react'
import { DecoratedSlide, SlideNumber } from 'rlz-web-slides'

const content = css({
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '76%'
})

const eyebrow = css({
    margin: 0,
    fontSize: '1.15rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#63c5da'
})

const title = css({
    margin: '1.25rem 0 0',
    fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
    fontWeight: 800
})

const subtitle = css({
    margin: '1.5rem 0 0',
    maxWidth: '42rem',
    fontSize: 'clamp(1.25rem, 2.4vw, 2.15rem)'
})

export function Lecture01WhatIsSreSlide01Cover() {
    return (
        <DecoratedSlide
            headerLeft="SRE · университетский курс"
            footerLeft="Лекция 1 · дата появится здесь"
            footerRight={<SlideNumber />}
            css={{ backgroundColor: '#102235', color: '#f4f8fc' }}
        >
            <div css={content}>
                <p css={eyebrow}>Рыба первой страницы</p>
                <h1 css={title}>Site Reliability Engineering</h1>
                <p css={subtitle}>
                    Как проектировать и эксплуатировать надёжные сервисы —
                    практический курс для инженеров.
                </p>
            </div>
        </DecoratedSlide>
    )
}
