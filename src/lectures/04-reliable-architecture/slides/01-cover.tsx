import { useSlidesTheme } from 'rlz-web-slides'
import { LectureCoverSlide } from '../../../components/lecture-cover-slide'
import architectureIllustration from '../assets/01-cover-architecture.png'

export function Lecture04ReliableArchitectureSlide01Cover() {
    const theme = useSlidesTheme()

    return (
        <LectureCoverSlide
            number={4}
            title="Архитектура надёжных сервисов"
            summary="Как сервис переживает сбои зависимостей, исчерпание ресурсов и аномальную нагрузку"
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
                    src={architectureIllustration}
                    alt="Схема надёжного сервиса: ограниченный поток запросов, сервис, база данных, очередь и отказавшая внешняя зависимость с обходным путём"
                    css={{
                        display: 'block',
                        width: 'calc(100% - 8px)',
                        height: 'auto',
                        maxHeight: '55%',
                        boxSizing: 'border-box',
                        margin: 4,
                        borderRadius: theme.radius
                    }}
                />
                <div css={{ padding: theme.spacings.half }}>
                    <ul css={{ margin: 0 }}>
                        <li>Зависимость отвечает ошибкой</li>
                        <li>Задумайтесь о лимитах</li>
                        <li>Как тестировать работу под нагрузкой</li>
                    </ul>
                </div>
            </div>
        </LectureCoverSlide>
    )
}
