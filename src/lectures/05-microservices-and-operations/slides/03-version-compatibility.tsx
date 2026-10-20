import { TextContentSlide } from '../../../components/slide-parts/text-content-slide'

export function Lecture05MicroservicesAndOperationsSlide03VersionCompatibility() {
    return (
        <TextContentSlide
            lectureNumber={5}
            title="Совместимость позволяет обновлять систему постепенно"
            lead="Во время раскатки рядом работают старые и новые версии кода, клиентов и форматов данных."
            blocks={[
                {
                    title: 'API и сообщения',
                    body: (
                        <p>
                            Сохраняйте совместимость, пока все потребители не
                            перешли на новый формат.
                        </p>
                    )
                },
                {
                    title: 'Данные',
                    body: (
                        <p>
                            Старый экземпляр должен уметь читать записи,
                            созданные новой версией.
                        </p>
                    )
                },
                {
                    title: 'Несколько версий',
                    body: (
                        <p>
                            Поддерживайте совместимость кода и данных на
                            несколько версий назад.
                        </p>
                    )
                }
            ]}
        />
    )
}
