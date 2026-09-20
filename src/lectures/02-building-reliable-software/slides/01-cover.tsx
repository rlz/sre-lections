import { LectureCoverSlide } from '../../../components/lecture-cover-slide'
import { useSlidesTheme } from 'rlz-web-slides'
import outageImpact from '../assets/01-outage-impact.png'

export function Lecture02BuildingReliableSoftwareSlide01Cover() {
    const theme = useSlidesTheme()

    return (
        <LectureCoverSlide
            number={2}
            title="О сбоях и принципах SRE"
            summary="Поговорим о сбоях, зачем ими заниматься, как повышать надежность и инженерных принципах SRE."
            panelPadding={0}
        >
            <div
                css={{
                    display: 'flex',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <img
                    src={outageImpact}
                    alt="Инженер смотрит на дашборд с плохими графиками, а пользователи не могут оплатить покупки, курьера, заказ еды и интернет"
                    css={[
                        {
                            display: 'block',
                            width: 'calc(100% - 8px)',
                            borderRadius: theme.radius,
                            margin: 4
                        },
                        theme.shadows.medium
                    ]}
                />
                <div css={{ padding: theme.spacings.half }}>
                    <ul>
                        <li>Что считать сбоем</li>
                        <li>Дорого ли стоят сбои?</li>
                        <li>
                            Как уменьшать число, масштаб и длительность сбоев
                        </li>
                        <li>Какие привычки помогают команде</li>
                    </ul>
                </div>
            </div>
        </LectureCoverSlide>
    )
}
