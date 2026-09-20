import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture02BuildingReliableSoftwareSlide11Preparedness() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={2}>
            <h1>Подготовка сокращает восстановление</h1>
            <div
                css={{
                    display: 'grid',
                    flex: 1,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: theme.spacing
                }}
            >
                <Panel css={theme.backgrounds.gradient('accent-1')}>
                    <h2>Диагностика</h2>
                    <p>Наблюдаемость и понятные точки проверки.</p>
                </Panel>
                <Panel css={theme.backgrounds.gradient('accent-2')}>
                    <h2>Инструменты</h2>
                    <p>
                        Проверенные способы остановить влияние и починить
                        сервис.
                    </p>
                </Panel>
                <Panel css={theme.backgrounds.gradient('accent-3')}>
                    <h2>Остаточные последствия</h2>
                    <p>
                        Средства исправить данные, повторить операцию или помочь
                        пользователю.
                    </p>
                </Panel>
            </div>
            <p>
                <strong>Иллюстрация:</strong> открытый аварийный шкаф с
                подписанными инструментами, схемой и фонарём; команда достаёт
                нужное без поиска в темноте.
            </p>
        </LectureContentSlide>
    )
}
