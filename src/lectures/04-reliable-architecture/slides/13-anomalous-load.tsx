import { Panel, useSlidesTheme } from 'rlz-web-slides'

import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide13AnomalousLoad() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                css={[
                    { height: '100%', width: '100%', padding: 0 },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <h1>Работа под аномальной нагрузкой</h1>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: theme.spacing,
                        height: '100%'
                    }}
                >
                    <div>
                        <p css={{ padding: theme.spacings.half }}>
                            Под аномальной нагрузкой сервис должен отказывать
                            контролируемо
                        </p>
                        <p css={{ padding: theme.spacings.half }}>
                            Ограничьте частоту запросов и размер очереди, пока
                            ресурсы ещё доступны
                        </p>
                        <p css={{ padding: theme.spacings.half }}>
                            После восстановления удалите работу, которая уже
                            потеряла смысл
                        </p>
                        <Panel
                            css={[
                                { margin: 4 },
                                theme.backgrounds.gradient('accent-1')
                            ]}
                        >
                            Например, не отправляйте временный пароль после
                            истечения его срока
                        </Panel>
                    </div>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
