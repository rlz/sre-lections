import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import dataCenter from '../assets/02-data-center-v4.jpg'

export function Lecture03DistributedSystemsSlide02ServiceIsNotOneComputer() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={3}>
            <Panel
                css={{
                    display: 'grid',
                    gridTemplateColumns: '0.6fr 1fr',
                    gap: theme.spacing,
                    height: '100%',
                    padding: 0
                }}
            >
                <div
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: theme.spacings.half,
                        minWidth: 0,
                        padding: theme.spacings.half
                    }}
                >
                    <h1>Сервис — это не один компьютер</h1>
                    <p>
                        <strong>Распределённая система</strong> — это несколько
                        независимых узлов, которые обмениваются сообщениями и
                        вместе предоставляют сервис.
                    </p>
                    <p>
                        Пользователь видит один сервис, хотя его работу
                        обеспечивают многие компьютеры и сетевые устройства.
                    </p>
                </div>
                <div
                    css={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 0,
                        minHeight: 0,
                        padding: 4,
                        boxSizing: 'border-box'
                    }}
                >
                    <img
                        src={dataCenter}
                        alt="Аккуратно соединённые серверные стойки в датацентре"
                        css={[
                            {
                                display: 'block',
                                height: '100%',
                                width: 'auto',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                borderRadius: theme.radius
                            },
                            theme.shadows.low
                        ]}
                    />
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
