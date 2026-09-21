import { css } from '@emotion/react'
import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import { colord } from 'colord'
import warRoomRecovery from '../assets/07-war-room-recovery.png'

export function Lecture02FailuresAndReliabilityPrinciplesSlide07Recovery() {
    const theme = useSlidesTheme()
    const numberCss = css([
        theme.backgrounds.gradient('neutral'),
        theme.shadows.low,
        {
            color: theme.colors.muted,
            fontSize: '1.5em',
            fontWeight: 'bold',
            borderRadius: '100%',
            padding: 8,
            aspectRatio: 1,
            textAlign: 'center'
        }
    ])

    const cardCss = css({
        padding: theme.spacings.half,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'column'
    })

    return (
        <LectureContentSlide number={2}>
            <Panel
                css={{
                    display: 'grid',
                    flex: 1,
                    minHeight: 0,
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gridTemplateRows: '2.5fr 1fr',
                    padding: 0
                }}
            >
                <div
                    css={{
                        gridColumn: '1 / 6'
                    }}
                >
                    <div
                        css={{
                            padding: `${theme.spacings.half}px ${theme.spacings.half}px 0 ${theme.spacings.half}px`
                        }}
                    >
                        <h1>Быстро восстановиться</h1>
                        <p>
                            На каждый из перечисленных этапов тратится время.
                            При этом ошибочно представлять процесс как линейный.
                            Можно устранить сбой, не найдя причину, а работать с
                            последствиями — ещё не устранив сбой.
                        </p>
                    </div>
                    <img
                        src={warRoomRecovery}
                        alt="Команда инженеров устраняет сбой в варруме, а преподаватель наблюдает с секундомером"
                        css={[
                            {
                                display: 'block',
                                margin: '0 auto',
                                width: '60%',
                                borderRadius: theme.radius
                            },
                            theme.shadows.low
                        ]}
                    />
                </div>
                <Panel
                    css={[
                        {
                            gridColumn: '1 / 6',
                            gridRow: '2',
                            margin: 4
                        },
                        theme.backgrounds.gradient(
                            colord(theme.colors.neutral).lighten(0.92).toHex()
                        )
                    ]}
                />
                <Panel
                    css={[
                        {
                            gridColumn: '2 / 6',
                            gridRow: '2',
                            margin: '8px 8px 8px 0'
                        },
                        theme.backgrounds.gradient('accent-1')
                    ]}
                />
                <Panel
                    css={[
                        {
                            gridColumn: '3 / 6',
                            gridRow: '2',
                            margin: '12px 12px 12px 0'
                        },
                        theme.backgrounds.gradient('accent-2')
                    ]}
                />
                <Panel
                    css={[
                        {
                            gridColumn: '4 / 6',
                            gridRow: '2',
                            margin: '16px 16px 16px 0'
                        },
                        theme.backgrounds.gradient('accent-3')
                    ]}
                />
                <Panel
                    css={[
                        {
                            gridColumn: '5',
                            gridRow: '2',
                            margin: '20px 20px 20px 0'
                        },
                        theme.backgrounds.gradient('dark')
                    ]}
                />
                <div css={[{ gridColumn: '1', gridRow: '2' }, cardCss]}>
                    <div css={numberCss}>1</div>
                    <div>узнать о проблеме</div>
                </div>
                <div css={[{ gridColumn: '2', gridRow: '2' }, cardCss]}>
                    <div css={numberCss}>2</div>
                    <div>собрать инженеров</div>
                </div>
                <div css={[{ gridColumn: '3', gridRow: '2' }, cardCss]}>
                    <div css={numberCss}>3</div>
                    <div>найти причину</div>
                </div>
                <div
                    css={[
                        {
                            gridColumn: '4',
                            gridRow: '2',
                            color: theme.colors.textDark
                        },
                        cardCss
                    ]}
                >
                    <div css={numberCss}>4</div>
                    <div>починить</div>
                </div>
                <div
                    css={[
                        {
                            gridColumn: '5',
                            gridRow: '2',
                            color: theme.colors.textDark
                        },
                        cardCss
                    ]}
                >
                    <div css={numberCss}>5</div>
                    <div>устранить последствия</div>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
