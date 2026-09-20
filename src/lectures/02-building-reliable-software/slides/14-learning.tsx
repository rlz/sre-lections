import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide14Learning() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={2}>
            <h1>Учиться на сбоях</h1>
            <div
                css={{
                    display: 'grid',
                    flex: 1,
                    gridTemplateColumns: '1fr 1fr',
                    gap: theme.spacing
                }}
            >
                <Panel css={theme.backgrounds.gradient('accent-1')}>
                    <h2>Улучшать систему</h2>
                    <p>
                        Разбор сбоя полезен, когда вывод приводит к изменению: в
                        архитектуре, наблюдаемости, документации или процессе.
                    </p>
                </Panel>
                <Panel css={theme.backgrounds.gradient('accent-2')}>
                    <h2>Говорить об ошибках открыто</h2>
                    <p>
                        Открытость помогает увидеть контекст и ограничения. Она
                        не отменяет различий между ошибкой, намеренным
                        действием, халатностью и отказом учиться.
                    </p>
                </Panel>
            </div>
            <p>
                <strong>Иллюстрация:</strong> команда после шторма чинит мост и
                одновременно делает пометки на схеме, чтобы следующий мост
                выдержал лучше.
            </p>
        </LectureContentSlide>
    )
}
