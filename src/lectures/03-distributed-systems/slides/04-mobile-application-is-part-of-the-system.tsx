import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import mobileUsers from '../assets/04-mobile-users.png'

export function Lecture03DistributedSystemsSlide04MobileApplicationIsPartOfTheSystem() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={3}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
                    gridTemplateRows: '1.6fr 1fr 1fr',
                    columnGap: theme.spacing,
                    height: '100%',
                    minHeight: 0
                }}
            >
                <Panel
                    css={[
                        {
                            gridColumn: '1 / 3',
                            gridRow: '1 / 4'
                        },
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
                    <h1>Мобильное приложение тоже часть системы</h1>
                    <p>
                        Клиент может надолго потерять связь, хотя серверная
                        часть продолжает работать.
                    </p>
                </div>
                <Panel
                    css={[
                        {
                            gridColumn: '1 / 3',
                            gridRow: '2 / 4',
                            margin: 4
                        },
                        theme.backgrounds.gradient('accent-1')
                    ]}
                />
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '2',
                        padding: theme.spacings.half
                    }}
                >
                    <p css={{ marginBottom: 0 }}>
                        Рассматриваем сетевые проблемы целиком — от телефона
                        пользователя до серверов. Проблемы распределенных
                        приложений проявляются на мобильных приложениях и их
                        взаимодействии с серверной частью точно так же.
                    </p>
                </div>
                <Panel
                    css={[
                        {
                            gridColumn: '1 / 3',
                            gridRow: '3',
                            margin: 8
                        },
                        theme.backgrounds.gradient('dark')
                    ]}
                />
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '3',
                        padding: theme.spacings.half,
                        color: theme.backgrounds.gradient('dark').color
                    }}
                >
                    <p css={{ marginBottom: 0 }}>
                        Почему-то не принято рассматривать мобильное приложение
                        частью распределенной системы. Хотя оно является частью
                        системы и никаких различий нет.
                    </p>
                </div>
                <img
                    src={mobileUsers}
                    alt="Люди на улице смотрят в телефоны; у одного телефона пропала связь"
                    css={[
                        {
                            gridColumn: '2',
                            gridRow: '1 / 4',
                            display: 'block',
                            width: 'auto',
                            height: 'calc(100% - 24px)',
                            alignSelf: 'center',
                            justifySelf: 'end',
                            margin: '12px 12px 12px 4px',
                            borderRadius: theme.radius
                        },
                        theme.shadows.low
                    ]}
                />
            </div>
        </LectureContentSlide>
    )
}
