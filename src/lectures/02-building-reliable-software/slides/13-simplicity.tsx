import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide13Simplicity() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={2}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: theme.spacing,
                    height: '100%'
                }}
            >
                <div>
                    <h1>Простота помогает чинить</h1>
                    <p>
                        Понятную систему легче проверять, объяснять, менять и
                        восстанавливать. Дополнительная сложность требует
                        оправдания.
                    </p>
                    <p>
                        KISS не призывает к примитивным решениям. Он напоминает,
                        что команда должна уметь поддерживать выбранную
                        конструкцию в реальных условиях.
                    </p>
                </div>
                <Panel css={theme.backgrounds.gradient('neutral')}>
                    <p>
                        <strong>Иллюстрация:</strong> рядом стоят два набора
                        труб. Прямой прозрачный маршрут легко проследить, а
                        второй запутан в узлах и закрытых коробах.
                    </p>
                </Panel>
            </div>
        </LectureContentSlide>
    )
}
