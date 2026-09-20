import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide04Trust() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={2}>
            <h1>Доверие нельзя выразить одной суммой</h1>
            <div
                css={{
                    display: 'grid',
                    flex: 1,
                    gridTemplateColumns: '1fr 1fr',
                    gap: theme.spacing
                }}
            >
                <Panel css={theme.backgrounds.gradient('accent-1')}>
                    <h2>Пользователи</h2>
                    <p>
                        Эффект повторяющихся сбоев может накапливаться. После
                        определённой точки человеку проще выбрать другой сервис.
                    </p>
                </Panel>
                <Panel css={theme.backgrounds.gradient('accent-2')}>
                    <h2>Партнёры</h2>
                    <p>
                        Решение крупного бизнеса прекратить сотрудничество
                        трудно обратить, даже если система потом работает
                        стабильно.
                    </p>
                </Panel>
            </div>
            <p>
                Надёжность становится частью ожиданий от продукта и культурной
                нормой, а не только строкой в финансовой модели.
            </p>
        </LectureContentSlide>
    )
}
