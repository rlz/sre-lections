import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide04Levers() {
    const theme = useSlidesTheme()
    const panels = [
        [
            '1',
            'Меньше сбоев',
            'Предусмотреть проблемы в архитектуре, коде, тестировании и изменениях.'
        ],
        [
            '2',
            'Меньше затронутых',
            'Изолировать отказ так, чтобы проблема не касалась всех пользователей.'
        ],
        [
            '3',
            'Короче восстановление',
            'Раньше заметить проблему и быстрее вернуть пользователям результат.'
        ]
    ]

    return (
        <LectureContentSlide number={2}>
            <h1>Три способа улучшать надёжность</h1>
            <div
                css={{
                    display: 'grid',
                    flex: 1,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: theme.spacing
                }}
            >
                {panels.map(([number, title, text], index) => (
                    <Panel
                        key={number}
                        css={theme.backgrounds.gradient(`accent-${index + 1}`)}
                    >
                        <p
                            css={{
                                fontSize: '2em',
                                fontWeight: 'bold',
                                marginTop: 0
                            }}
                        >
                            {number}
                        </p>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </Panel>
                ))}
            </div>
            <p>
                <strong>Иллюстрация:</strong> одна буря над тремя соседними
                домами: первый укреплён, второй отделён переборками, у третьего
                уже разложены инструменты для ремонта.
            </p>
        </LectureContentSlide>
    )
}
