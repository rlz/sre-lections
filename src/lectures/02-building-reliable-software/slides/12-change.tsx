import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide12Change() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={2}>
            <h1>«Работает — не трогай» создаёт риск</h1>
            <div
                css={{
                    display: 'grid',
                    flex: 1,
                    gridTemplateColumns: '1fr 1fr',
                    gap: theme.spacing
                }}
            >
                <Panel css={theme.backgrounds.gradient('accent-2')}>
                    <h2>Если не менять</h2>
                    <p>
                        Уходят знания о системе, устаревают зависимости и
                        исчезает навык восстановления.
                    </p>
                </Panel>
                <Panel css={theme.backgrounds.gradient('accent-3')}>
                    <h2>Если готовить изменения</h2>
                    <p>
                        Команда сохраняет понимание системы, проверяет путь
                        восстановления и обновляет инструменты.
                    </p>
                </Panel>
            </div>
            <p>
                <strong>Иллюстрация:</strong> механизм под стеклянным колпаком
                покрывается пылью, а рядом команда бережно проверяет и смазывает
                такой же механизм.
            </p>
        </LectureContentSlide>
    )
}
