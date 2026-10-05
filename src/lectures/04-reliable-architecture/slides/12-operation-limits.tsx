import { Panel, useSlidesTheme } from 'rlz-web-slides'

import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide12OperationLimits() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                css={[
                    { height: '100%', width: '100%', padding: 0 },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <h1>Задумайтесь о лимитах</h1>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        height: '100%',
                        minHeight: 0
                    }}
                >
                    <Panel
                        css={[
                            { gridColumn: '1 / 3', gridRow: '1', margin: 4 },
                            theme.backgrounds.gradient('accent-1')
                        ]}
                    />
                    <Panel
                        css={[
                            { gridColumn: '2', gridRow: '1', margin: 8 },
                            theme.backgrounds.gradient('accent-2')
                        ]}
                    />
                    <div
                        css={{
                            gridColumn: '1',
                            gridRow: '1',
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
                    <div
                        css={{
                            gridColumn: '2',
                            gridRow: '1',
                            padding: theme.spacings.half,
                            color: theme.backgrounds.gradient('accent-2').color
                        }}
                    >
                        <h2>Функциональные</h2>
                        <ul>
                            <li>Максимальное количество карт</li>
                            <li>Максимальное количество товаров в корзине</li>
                            <li>Максимальное количество подписок</li>
                            <li>Максимальное количество человек в чате</li>
                        </ul>
                    </div>
                </div>
            </Panel>
        </LectureContentSlide>
    )
}
