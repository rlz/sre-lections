import { TextContentSlide } from '../../../components/slide-parts/text-content-slide'

export function Lecture05MicroservicesAndOperationsSlide07MicroserviceCosts() {
    return (
        <TextContentSlide
            lectureNumber={5}
            title="Каждая граница сервиса добавляет сложность"
            lead="Вызов между процессами проходит через сеть и может отказать независимо от вызывающей стороны."
            blocks={[
                {
                    title: 'Задержка и ресурсы',
                    body: (
                        <p>
                            Сеть медленнее вызова внутри процесса; сериализация
                            расходует время и память.
                        </p>
                    )
                },
                {
                    title: 'Совместимость',
                    body: (
                        <p>
                            Нужно поддерживать версии API, сообщений и данных во
                            время раскатки.
                        </p>
                    )
                },
                {
                    title: 'Эксплуатация',
                    body: (
                        <p>
                            Нужны таймауты, повторы, лимиты, балансировка,
                            трассировка и диагностика цепочек.
                        </p>
                    )
                }
            ]}
        />
    )
}
