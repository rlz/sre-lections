import { Panel, useSlidesTheme } from 'rlz-web-slides'

import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide11FiniteResources() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={4}>
            <Panel
                css={[
                    { height: '100%', width: '100%', padding: 0 },
                    theme.backgrounds.gradient('light')
                ]}
            >
                <h1>Исчерпаться может любой конечный ресурс</h1>
                <div
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: theme.spacing,
                        height: '100%'
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
            </Panel>
        </LectureContentSlide>
    )
}
