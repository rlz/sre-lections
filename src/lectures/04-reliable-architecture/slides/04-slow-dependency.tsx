import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import illustration from '../assets/04-slow-dependency.jpg'

export function Lecture04ReliableArchitectureSlide04SlowDependency() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                padding={0}
                css={[
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                    },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '1',
                        padding: theme.spacings.half,
                        flex: 1
                    }}
                >
                    <h1>Зависимость может отвечать медленнее</h1>
                    <p>
                        Даже небольшое увеличение времени ответа с 5 до 8 мс
                        может привести к серьёзным изменениям в работе системы.
                    </p>
                    <p>
                        Это происходит потому, что более медленная обработка
                        может заполнить пулы соединений и очереди или исчерпать
                        другие ресурсы, занятые на время обработки.
                    </p>
                    <p>
                        Это более сложный для обработки в коде случай, чем
                        просто ошибки.
                    </p>
                </div>
                <img
                    src={illustration}
                    alt="Сравнение ответа за 5 и 8 мс: при более долгой обработке очередь растёт, а соединения дольше остаются занятыми."
                    css={{
                        display: 'block',
                        width: '77.2%',
                        height: 'auto',
                        margin: 4,
                        alignSelf: 'center',
                        borderRadius: theme.radius,
                        ...theme.shadows.low
                    }}
                />
            </Panel>
        </LectureContentSlide>
    )
}
