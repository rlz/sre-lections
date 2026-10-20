import { TextContentSlide } from '../../../components/slide-parts/text-content-slide'

export function Lecture05MicroservicesAndOperationsSlide10ArchitectureChoice() {
    return (
        <TextContentSlide
            lectureNumber={5}
            title="Микросервисы не повышают надёжность автоматически"
            lead="Выбирайте архитектуру по нужной независимости и способности команды её поддерживать."
            blocks={[
                {
                    title: 'Нужна независимость?',
                    body: (
                        <p>
                            Назовите конкретный выигрыш: отдельный релиз,
                            масштабирование или ограничение отказа.
                        </p>
                    )
                },
                {
                    title: 'Части меняются вместе?',
                    body: (
                        <p>
                            Начните с модульного монолита и проверьте внутренние
                            границы.
                        </p>
                    )
                },
                {
                    title: 'Проверьте эксплуатацию',
                    body: (
                        <p>
                            Испытайте обновление, откат, диагностику и отказ
                            зависимости.
                        </p>
                    )
                }
            ]}
        />
    )
}
