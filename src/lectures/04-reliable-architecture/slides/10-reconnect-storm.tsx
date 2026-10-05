import { useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide10ReconnectStorm() {
    const theme = useSlidesTheme()
    return (
        <LectureContentSlide number={4}>
            <div
                css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'calc(100% - 8px)',
                    height: 'calc(100% - 8px)',
                    margin: 4,
                    minHeight: 180,
                    padding: 16,
                    boxSizing: 'border-box',
                    borderRadius: theme.radius,
                    ...theme.shadows.low,
                    background: '#d8d2f0',
                    color: '#343044',
                    textAlign: 'center'
                }}
            >
                <strong>Иллюстрация будет здесь</strong>
                <br />
                `В центре сервер-персонаж упал и лежит. Вокруг него персонажи
                банкоматы.`
            </div>
        </LectureContentSlide>
    )
}
