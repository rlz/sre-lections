import { Panel, useSlidesTheme } from 'rlz-web-slides'

import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide11FiniteResources() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr)',
                    gridTemplateRows: 'auto minmax(0, 1fr)',
                    height: '100%',
                    minHeight: 0
                }}
            >
                <Panel
                    css={[
                        { gridColumn: '1', gridRow: '1 / 3' },
                        theme.backgrounds.gradient('light')
                    ]}
                />
                <h1
                    css={{
                        gridColumn: '1',
                        gridRow: '1',
                        padding: theme.spacings.half
                    }}
                >
                    Исчерпаться может любой конечный ресурс
                </h1>
                <div
                    css={{
                        gridColumn: '1',
                        gridRow: '2',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: theme.spacing,
                        minHeight: 0
                    }}
                >
                    <ul css={{ padding: theme.spacings.half }}>
                        <li>
                            Память, диск, очередь, кэш, пул соединений, файловые
                            дескрипторы, порты и др.
                        </li>
                    </ul>
                    <p css={{ padding: theme.spacings.half }}>
                        Однажды добавили серверов и получили сбой у партнеров,
                        которые работали с AWS. Оказалось, что DNS-рехолвер в
                        AWS не мог резолвить записи с таким количеством адресов.
                    </p>
                </div>
            </div>
        </LectureContentSlide>
    )
}
