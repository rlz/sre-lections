import { LectureCoverSlide } from '../../../components/lecture-cover-slide'
import { useSlidesTheme } from 'rlz-web-slides'
import distributedSystems from '../assets/01-cover.jpg'

export function Lecture03DistributedSystemsSlide01Cover() {
    const theme = useSlidesTheme()

    return (
        <LectureCoverSlide
            number={3}
            title="Распределённые системы"
            summary="Как узлы общаются через сеть, договариваются о решениях и сохраняют работу при сбоях связи."
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
                    src={distributedSystems}
                    alt="Три сервера обмениваются сообщениями по сети"
                    css={[
                        {
                            display: 'block',
                            width: 'calc(100% - 8px)',
                            borderRadius: theme.radius,
                            margin: 4
                        },
                        theme.shadows.low
                    ]}
                />
                <div css={{ padding: theme.spacings.half }}>
                    <ul>
                        <li>Узлы и сеть</li>
                        <li>Как системе договориться</li>
                        <li>Компромиссы CAP и PACELC</li>
                    </ul>
                </div>
            </div>
        </LectureCoverSlide>
    )
}
