import { useSlidesTheme } from 'rlz-web-slides'
import { LectureCoverSlide } from '../../../components/lecture-cover-slide'

export function Lecture06DistributedTransactionsSlide01Cover() {
    const theme = useSlidesTheme()

    return (
        <LectureCoverSlide
            number={6}
            title="Распределённые транзакции"
            summary="Двухфазный коммит, саги, идемпотентность и оркестрация процессов."
        >
            <div
                css={{
                    display: 'flex',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <div
                    css={{
                        display: 'flex',
                        minHeight: 0,
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#d8d2f0',
                        margin: 4,
                        borderRadius: theme.radius,
                        ...theme.shadows.low
                    }}
                >
                    <div css={{ padding: theme.spacings.half }}>
                        <strong>Иллюстрация будет здесь</strong>
                        <p>
                            Клиент оформляет покупку; отдельные сервисы отвечают
                            за заказ, оплату и доставку.
                        </p>
                    </div>
                </div>
                <div css={{ padding: theme.spacings.half }}>
                    <ul css={{ margin: 0 }}>
                        <li>Двухфазный коммит</li>
                        <li>Саги и компенсации</li>
                        <li>Надёжная оркестрация</li>
                    </ul>
                </div>
            </div>
        </LectureCoverSlide>
    )
}
