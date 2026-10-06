import { Panel, useSlidesTheme } from 'rlz-web-slides'

import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide12OperationLimits() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                padding={0}
                css={[
                    {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: '1.1fr 1fr',
                        height: '100%'
                    },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <div
                    css={{
                        gridColumn: '1 / 3',
                        gridRow: '1',
                        padding: theme.spacings.half
                    }}
                >
                    <h1>Задумайтесь о лимитах</h1>
                    <p>
                        Выставление лимитов позволяет деградировать адекватным
                        образом за счет понятного соощения о ошибке, и быстро об
                        этом узнавать за счет мониторинга.
                    </p>
                </div>
                <Panel
                    css={[
                        {
                            margin: 4,
                            gridColumn: '1 / 3',
                            gridRow: '2'
                        },
                        theme.backgrounds.gradient('accent-1')
                    ]}
                ></Panel>
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '2',
                        padding: theme.spacings.half
                    }}
                >
                    <h2>Технические</h2>
                    <ul>
                        <li>Максимальный размер запроса</li>
                        <li>Максимальный размер ответа</li>
                        <li>Максимальный размер очередей</li>
                        <li>Максимальное число порождаемых вызовов</li>
                    </ul>
                </div>
                <Panel
                    css={[
                        {
                            margin: 8,
                            marginLeft: 0,
                            gridColumn: '2',
                            gridRow: '2'
                        },
                        theme.backgrounds.gradient('accent-2')
                    ]}
                >
                    <h2>Функциональные</h2>
                    <ul>
                        <li>Максимальное количество карт</li>
                        <li>Максимальное количество товаров в корзине</li>
                        <li>Максимальное количество подписок</li>
                        <li>Максимальное количество человек в чате</li>
                    </ul>
                </Panel>
            </Panel>
        </LectureContentSlide>
    )
}
