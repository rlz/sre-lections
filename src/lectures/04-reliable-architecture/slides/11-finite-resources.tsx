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
                        gridTemplateRows: '0.35fr 1fr',
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
                ></Panel>
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '2',
                        padding: theme.spacings.half
                    }}
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
                    <h2>Отказ у партнеров в AWS</h2>
                    <p>
                        Мы масштабировали сервис: добавили серверы и внесли их
                        адреса в DNS-запись. Раньше мы уже делали это много раз
                        без проблем.
                    </p>
                    <p>
                        Позже клиенты стали сообщать, что сервис недоступен. При
                        этом у остальных всё работало, поэтому связать сбой с
                        обновлением DNS было непросто.
                    </p>
                    <p>
                        Выяснилось, что проблемы возникли только у партнёров,
                        размещённых в AWS. Их DNS-резолвер не поддерживал такое
                        количество адресов в одной записи.
                    </p>
                </Panel>
            </Panel>
        </LectureContentSlide>
    )
}
