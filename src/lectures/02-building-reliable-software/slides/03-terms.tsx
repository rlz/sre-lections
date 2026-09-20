import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide03Terms() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={2}>
            <h1>Словарь команды</h1>
            <div
                css={{
                    display: 'grid',
                    flex: 1,
                    gridTemplateColumns: '1fr 1fr',
                    gap: theme.spacing
                }}
            >
                <Panel css={theme.backgrounds.gradient('accent-1')}>
                    <h2>Одинаковые слова</h2>
                    <p>
                        «Инцидент» и «сбой» часто используют как синонимы. В
                        некоторых компаниях они обозначают разные уровни
                        отклонений.
                    </p>
                </Panel>
                <Panel css={theme.backgrounds.gradient('accent-2')}>
                    <h2>Общие действия</h2>
                    <p>
                        Важнее заранее согласовать: что фиксируем, кого зовём,
                        как выбираем приоритет и что сообщаем пользователям.
                    </p>
                </Panel>
            </div>
            <p>
                <strong>Иллюстрация:</strong> команда прикрепляет на стену
                короткий общий словарь перед пультом с мигающими лампочками.
            </p>
        </LectureContentSlide>
    )
}
