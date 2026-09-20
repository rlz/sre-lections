import { css } from '@emotion/react'
import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import reliabilityEngineer from '../assets/02-reliability-engineer.png'

export function Lecture01ReliabilityBasicsSlide02Reliability() {
    const theme = useSlidesTheme()
    const colorBoxCss = css({
        gridRow: '2',
        padding: theme.spacings.half,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'column'
    })

    const numberCss = css([
        theme.backgrounds.gradient('neutral'),
        theme.shadows.low,
        {
            color: theme.colors.muted,
            fontSize: '2em',
            fontWeight: 'bold',
            borderRadius: '100%',
            padding: 10,
            aspectRatio: 1,
            textAlign: 'center'
        }
    ])

    return (
        <LectureContentSlide number={1}>
            <Panel
                css={{
                    height: '100%',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridTemplateRows: '1.2fr 1fr',
                    rowGap: theme.spacings.half,
                    padding: 0
                }}
            >
                <div
                    css={{
                        gridColumn: '1 / 4',
                        gridRow: '1',
                        display: 'flex',
                        gap: theme.spacings.base,
                        height: '100%',
                        minHeight: 0,
                        padding: 0
                    }}
                >
                    <div css={{ flex: 1, padding: theme.spacings.half }}>
                        <h1>Что такое надёжность</h1>
                        <p>
                            <strong>Наивное определение:</strong> способность
                            системы выполнять обещанную пользователю функцию.
                        </p>
                        <p>
                            На самом деле в этом определении всё непонятно для
                            использования на практике. При попытке применить это
                            определение на практике инженер столкнётся с ворохом
                            проблем. Спорным будет даже вопрос о том, оказана ли
                            услуга.
                        </p>
                    </div>
                    <div
                        css={{
                            alignSelf: 'stretch',
                            display: 'flex',
                            flexShrink: 0,
                            height: 'calc(100% - 8px)',
                            margin: 4,
                            width: 'auto'
                        }}
                    >
                        <img
                            src={reliabilityEngineer}
                            alt="Инженер разводит руками: с надёжностью всё сложно"
                            css={[
                                {
                                    display: 'block',
                                    width: 'auto',
                                    height: '100%',
                                    borderRadius: theme.radius
                                },
                                theme.shadows.medium
                            ]}
                        />
                    </div>
                </div>
                <Panel
                    css={[
                        {
                            gridColumn: '1 / 4',
                            gridRow: '2',
                            margin: 4
                        },
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
                        { gridColumn: '3', gridRow: '2', margin: 12 },
                        theme.backgrounds.gradient('accent-3')
                    ]}
                />
                <div
                    css={[
                        {
                            gridColumn: '1'
                        },
                        colorBoxCss
                    ]}
                >
                    <div css={numberCss}>1</div>
                    <div>
                        Первый сложный вопрос: а надёжность{' '}
                        <strong>чего именно</strong> мы обеспечиваем?
                    </div>
                </div>
                <div
                    css={[
                        {
                            gridColumn: '2'
                        },
                        colorBoxCss
                    ]}
                >
                    <div css={numberCss}>2</div>
                    <div>
                        Второй сложный вопрос: что мы называем{' '}
                        <strong>успешной работой</strong> сервиса?
                    </div>
                </div>
                <div
                    css={[
                        {
                            gridColumn: '3'
                        },
                        colorBoxCss
                    ]}
                >
                    <div css={numberCss}>3</div>
                    <div>
                        Первый вопрос, с которого надо начать: а надёжность{' '}
                        <strong>чего именно</strong> мы обеспечиваем?
                    </div>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
