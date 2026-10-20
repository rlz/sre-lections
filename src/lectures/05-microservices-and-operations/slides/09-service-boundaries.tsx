import { TextContentSlide } from '../../../components/slide-parts/text-content-slide'

export function Lecture05MicroservicesAndOperationsSlide09ServiceBoundaries() {
    return (
        <TextContentSlide
            lectureNumber={5}
            title="Границы сервисов и команды"
            lead="Микросервисы часто обосновывают тем, что так проще работать многим командам."
            blocks={[
                {
                    title: 'Архитектура и команды',
                    body: (
                        <p>
                            Границы сервисов влияют на работу команд — и границы
                            команд влияют на архитектуру.
                        </p>
                    )
                },
                {
                    title: 'Организационные границы',
                    body: (
                        <p>
                            Разделение по отделам может увеличить число
                            согласований и межсервисных изменений.
                        </p>
                    )
                }
            ]}
        />
    )
}
