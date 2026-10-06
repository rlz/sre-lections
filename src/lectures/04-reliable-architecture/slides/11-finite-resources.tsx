import { Panel, useSlidesTheme } from 'rlz-web-slides'

import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide11FiniteResources() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                padding={0}
                css={[
                    {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: '0.4fr 1fr',
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
                    <h1>Следим за исчерпаемыми ресурсами</h1>
                    <p>Их наудивление много и много неожиданных</p>
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
                >
                    <h2>Примеры</h2>
                    <ul>
                        <li>Память</li>
                        <li>диск</li>
                        <li>очередь</li>
                        <li>кэш</li>
                        <li>пулы соединений</li>
                        <li>пулы потоков</li>
                        <li>файловые дескрипторы</li>
                        <li>порты</li>
                    </ul>
                </Panel>
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
                    <h2>Отказ у партнеров в AWS</h2>
                    <p>
                        Однажды мы масштабировали сервис, добавили серверов и
                        добавили их адреса в DNS запись. Процедура обычная и
                        много раз совершаемая до этого.
                    </p>
                    <p>
                        Но один раз нам стали жаловаться клиенты, что мы для них
                        стали недоступны. Но у других все работало и связать с
                        нашими действиями это було сложно.
                    </p>
                    <p>
                        Оказалось, что пострадали только партнеры, которые
                        хостились в AWS. DNS-резолвер в AWS не поддерживал такое
                        количество адресов в одной записи, хотя остальные
                        работали.
                    </p>
                </Panel>
            </Panel>
        </LectureContentSlide>
    )
}
