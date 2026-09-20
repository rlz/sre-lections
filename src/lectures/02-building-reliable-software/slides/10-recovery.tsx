import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide10Recovery() {
    const theme = useSlidesTheme()
    const stages = [
        'Заметить проблему',
        'Собрать нужных людей',
        'Понять причину',
        'Починить и убрать последствия'
    ]

    return (
        <LectureContentSlide number={2}>
            <h1>Путь к восстановлению</h1>
            <p>
                Сбой продолжается, пока пользователь не может получить обещанный
                результат.
            </p>
            <div
                css={{
                    display: 'grid',
                    flex: 1,
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: theme.spacings.tight
                }}
            >
                {stages.map((stage, index) => (
                    <Panel
                        key={stage}
                        css={theme.backgrounds.gradient(
                            index % 2 === 0 ? 'accent-2' : 'accent-3'
                        )}
                    >
                        <p css={{ fontWeight: 'bold', marginTop: 0 }}>
                            {index + 1}
                        </p>
                        <p>{stage}</p>
                    </Panel>
                ))}
            </div>
        </LectureContentSlide>
    )
}
