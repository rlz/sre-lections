import { TextContentSlide } from '../../../components/slide-parts/text-content-slide'

export function Lecture05MicroservicesAndOperationsSlide04DataMigration() {
    return (
        <TextContentSlide
            lectureNumber={5}
            title="Меняйте формат данных постепенно"
            lead="Сначала расширьте систему, затем переведите потребителей и только после этого удаляйте старое."
            blocks={[
                {
                    title: '1. Добавьте',
                    body: (
                        <p>Добавьте новое поле или формат, сохранив прежний.</p>
                    )
                },
                {
                    title: '2. Переведите',
                    body: (
                        <p>
                            Научите код читать оба варианта и постепенно
                            перенесите данные.
                        </p>
                    )
                },
                {
                    title: '3. Удалите',
                    body: (
                        <p>
                            Убедитесь, что старых читателей больше нет, и
                            удалите прежнее поле отдельным изменением.
                        </p>
                    )
                }
            ]}
        />
    )
}
