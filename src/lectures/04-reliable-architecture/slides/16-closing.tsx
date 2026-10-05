import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture04ReliableArchitectureSlide16Closing() {
    return (
        <LectureContentSlide number={4}>
            <div
                css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    minHeight: 180,
                    padding: 16,
                    boxSizing: 'border-box',
                    borderRadius: 8,
                    background: '#d8d2f0',
                    color: '#343044',
                    textAlign: 'center'
                }}
            >
                <strong>Иллюстрация будет здесь</strong>
                <span>
                    `Изображение меня за доской с архитектурой сервиса — я
                    что-то пишу, проектирую ее`
                </span>
            </div>
        </LectureContentSlide>
    )
}
