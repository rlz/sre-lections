import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import dataCenter from '../assets/03-unreliable-network.png'

const links = [
    {
        label: 'Внутри датацентра',
        detail: 'Низкая задержка. Сбои возможны.'
    },
    {
        label: 'Между датацентрами',
        detail: 'Обычно выше задержка. Возможны потери.'
    },
    {
        label: 'С партнёрами',
        detail: 'Чужая сеть — меньше контроля.'
    },
    {
        label: 'До мобильного приложения',
        detail: 'Связь может исчезнуть надолго.'
    }
] as const

export function Lecture03DistributedSystemsSlide03NetworkIsUnreliable() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={3}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr) auto',
                    gridTemplateRows: '1.4fr 1fr 1fr',
                    gap: 0,
                    height: '100%',
                    minHeight: 0,
                    padding: 0
                }}
            >
                <Panel
                    css={[
                        {
                            gridColumn: '1 / 4',
                            gridRow: '1 / 4'
                        },
                        theme.backgrounds.gradient('light')
                    ]}
                />
                <div
                    css={{
                        gridColumn: '1/3',
                        gridRow: '1',
                        padding: theme.spacings.half
                    }}
                >
                    <h1>Сеть делает взаимодействие ненадёжным</h1>
                    <p>Запрос или ответ может задержаться или потеряться.</p>
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
                        theme.backgrounds.gradient('dark')
                    ]}
                />
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '2',
                        display: 'flex',
                        alignItems: 'center',
                        padding: theme.spacings.half
                    }}
                >
                    <p>
                        <strong>{links[0].label}</strong>
                        <br />
                        {links[0].detail}
                    </p>
                </div>
                <div
                    css={{
                        gridColumn: '2',
                        gridRow: '2',
                        display: 'flex',
                        alignItems: 'center',
                        padding: theme.spacings.half,
                        color: theme.backgrounds.gradient('dark').color
                    }}
                >
                    <p>
                        <strong>{links[1].label}</strong>
                        <br />
                        {links[1].detail}
                    </p>
                </div>
                <Panel
                    css={[
                        {
                            gridColumn: '1 / 4',
                            gridRow: '3',
                            margin: 4
                        },
                        theme.backgrounds.gradient('accent-2')
                    ]}
                />
                <Panel
                    css={[
                        {
                            gridColumn: '2 / 4',
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
                        display: 'flex',
                        alignItems: 'center',
                        padding: theme.spacings.half
                    }}
                >
                    <p>
                        <strong>{links[2].label}</strong>
                        <br />
                        {links[2].detail}
                    </p>
                </div>
                <div
                    css={{
                        gridColumn: '2',
                        gridRow: '3',
                        display: 'flex',
                        alignItems: 'center',
                        padding: theme.spacings.half,
                        color: theme.backgrounds.gradient('dark').color
                    }}
                >
                    <p>
                        <strong>{links[3].label}</strong>
                        <br />
                        {links[3].detail}
                    </p>
                </div>
                <img
                    src={dataCenter}
                    alt="Старый датацентр с перепутанными сетевыми кабелями"
                    css={[
                        {
                            gridColumn: '3',
                            gridRow: '1 / 4',
                            display: 'block',
                            width: 'auto',
                            height: 'calc(100% - 24px)',
                            alignSelf: 'center',
                            justifySelf: 'end',
                            margin: 12,
                            borderRadius: theme.radius
                        },
                        theme.shadows.low
                    ]}
                />
            </div>
        </LectureContentSlide>
    )
}
