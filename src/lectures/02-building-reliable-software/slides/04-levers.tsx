import { css } from '@emotion/react'
import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import architectureWhiteboard from '../assets/03-architecture-whiteboard.png'
import geoDistribution from '../assets/04-geo-distribution.png'
import redRoom from '../assets/05-red-room.png'

export function Lecture02BuildingReliableSoftwareSlide04Levers() {
    const theme = useSlidesTheme()
    const panels = [
        {
            number: '1',
            title: 'Меньше сбоев',
            text: 'Предусмотреть проблемы в архитектуре, коде, тестировании и изменениях.',
            image: architectureWhiteboard,
            imageAlt: 'Студент проектирует архитектуру сервиса у доски',
            background: 'accent-1' as const,
            backgroundColumn: '1 / 4',
            inset: 4
        },
        {
            number: '2',
            title: 'Меньше пострадавших',
            text: 'Изолировать отказ так, чтобы проблема не касалась всех пользователей.',
            image: geoDistribution,
            imageAlt: 'Геораспределённая архитектура на карте мира',
            background: 'accent-2' as const,
            backgroundColumn: '2 / 4',
            inset: 8
        },
        {
            number: '3',
            title: 'Короче восстановление',
            text: 'Раньше заметить проблему и быстрее вернуть пользователям результат.',
            image: redRoom,
            imageAlt: 'Команда с нашим студентом устраняет сбой в red room',
            background: 'accent-3' as const,
            backgroundColumn: '3',
            inset: 12
        }
    ]

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

    const illustrationCss = css([
        {
            display: 'block',
            margin: 4,
            width: 'calc(100% - 8px)',
            aspectRatio: '16 / 9',
            objectFit: 'cover',
            borderRadius: theme.radius
        },
        theme.shadows.medium
    ])

    return (
        <LectureContentSlide number={2}>
            <Panel
                css={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: 'auto 1fr',
                    height: '100%',
                    padding: 0
                }}
            >
                <div
                    css={{
                        padding: theme.spacings.half,
                        gridColumn: '1 / 4',
                        gridRow: '1'
                    }}
                >
                    <h1>Три способа улучшать надёжность</h1>
                </div>
                {panels.map(
                    ({ number, background, backgroundColumn, inset }) => (
                        <Panel
                            key={`background-${number}`}
                            css={[
                                {
                                    gridColumn: backgroundColumn,
                                    gridRow: '2',
                                    margin: inset
                                },
                                theme.backgrounds.gradient(background)
                            ]}
                        />
                    )
                )}
                {panels.map(
                    (
                        { number, title, text, image, imageAlt, inset },
                        index
                    ) => (
                        <div
                            key={number}
                            css={{
                                gridColumn: `${index + 1}`,
                                gridRow: '2',
                                display: 'flex',
                                margin: inset,
                                flexDirection: 'column',
                                color:
                                    index === 2
                                        ? theme.colors.textDark
                                        : undefined
                            }}
                        >
                            <img
                                src={image}
                                alt={imageAlt}
                                css={illustrationCss}
                            />
                            <div
                                css={{
                                    flex: 1,
                                    padding: theme.spacings.tight,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    flexDirection: 'column'
                                }}
                            >
                                <div css={numberCss}>{number}</div>
                                <div>
                                    <h2
                                        css={{
                                            margin: 0,
                                            fontSize: '1.2em !important'
                                        }}
                                    >
                                        {title}
                                    </h2>
                                    <p css={{ margin: 0 }}>{text}</p>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </Panel>
        </LectureContentSlide>
    )
}
