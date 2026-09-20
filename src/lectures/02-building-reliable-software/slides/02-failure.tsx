import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide02Failure() {
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
                    <h1>Сбой</h1>
                    <p>
                        Сбоем назовём{' '}
                        <strong>
                            существенное отклонение от нормальной работы,
                            которое замечают пользователи
                        </strong>
                        .
                    </p>
                    <p>
                        Это рабочее определение для разговора о надёжности.
                        Внутри компании слова «сбой» и «инцидент» могут означать
                        другое.
                    </p>
                </div>
                <Panel css={theme.backgrounds.gradient('accent-1')}>
                    <h2>Договорённость важнее слова</h2>
                    <p>
                        Команде нужно заранее договориться, какие отклонения она
                        фиксирует, кто подключается и как выбирает приоритет.
                    </p>
                    <p css={{ marginTop: '1.5em' }}>
                        <strong>Иллюстрация:</strong> два инженера смотрят на
                        один мигающий пульт. Один подписывает событие
                        «инцидент», другой — «сбой»; рядом общий словарь с
                        отмеченными определениями.
                    </p>
                </Panel>
            </div>
        </LectureContentSlide>
    )
}
