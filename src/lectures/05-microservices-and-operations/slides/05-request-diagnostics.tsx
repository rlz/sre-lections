import { TextContentSlide } from '../../../components/slide-parts/text-content-slide'

export function Lecture05MicroservicesAndOperationsSlide05RequestDiagnostics() {
    return (
        <TextContentSlide
            lectureNumber={5}
            title="Проследите запрос через всю систему"
            lead="Оформление покупки может пройти через корзину, остатки, оплату и доставку."
            blocks={[
                {
                    title: 'Сквозной ID',
                    body: (
                        <p>
                            Передавайте один идентификатор через сервисы и
                            очереди.
                        </p>
                    )
                },
                {
                    title: 'Логи',
                    body: (
                        <p>
                            Свяжите события разных компонентов по этому
                            идентификатору.
                        </p>
                    )
                },
                {
                    title: 'Трасса и метрики',
                    body: (
                        <p>
                            Трасса показывает путь и задержки вызова, метрики —
                            частоту и масштаб проблемы.
                        </p>
                    )
                }
            ]}
        />
    )
}
