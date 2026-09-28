import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import networkPartition from '../assets/11-cap-network-partition.png'

export function Lecture03DistributedSystemsSlide11CapTradeoff() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={3}>
            <Panel
                css={[
                    {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: theme.spacing,
                        height: '100%',
                        minHeight: 0,
                        padding: 4
                    },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <div
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: theme.spacings.half
                    }}
                >
                    <h1>CAP при сетевом разделе</h1>
                    <p>
                        Когда группы узлов не могут связаться, система выбирает
                        между согласованностью и доступностью.
                    </p>
                    <p>
                        <strong>CP:</strong> отказать в операции, если нельзя
                        сохранить единое значение.
                    </p>
                    <p>
                        <strong>AP:</strong> продолжать отвечать, допуская
                        временно разные значения.
                    </p>
                    <p>
                        Доступность здесь означает успешный ответ на корректный
                        запрос к доступному узлу.
                    </p>
                </div>
                <div
                    css={{
                        margin: 4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 0,
                        minHeight: 0
                    }}
                >
                    <img
                        src={networkPartition}
                        alt="Экскаватор перерубает кабель между двумя датацентрами"
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
