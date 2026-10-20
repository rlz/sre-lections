import { TextContentSlide } from '../../../components/slide-parts/text-content-slide'

export function Lecture05MicroservicesAndOperationsSlide06ServiceDiagnostics() {
    return (
        <TextContentSlide
            lectureNumber={5}
            title="Сервис должен объяснять своё состояние"
            lead="Встроенная диагностика помогает отличить локальную проблему от общего отказа."
            blocks={[
                {
                    title: 'Показывайте',
                    body: (
                        <p>
                            Активные соединения, размеры очередей, версию и
                            доступность зависимостей.
                        </p>
                    )
                },
                {
                    title: 'Представляйтесь',
                    body: (
                        <p>
                            Каждый сервис подтверждает свою идентичность при
                            подключении.
                        </p>
                    )
                },
                {
                    title: 'Проверяйте права',
                    body: (
                        <p>
                            Сертификат подтверждает сторону соединения;
                            авторизация определяет разрешённые действия.
                        </p>
                    )
                }
            ]}
        />
    )
}
