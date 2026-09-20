import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import purchaseChain from '../assets/03-purchase-chain.png'

export function Lecture01ReliabilityBasicsSlide03UserOutcome() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={1}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '1fr auto',
                    columnGap: theme.spacing,
                    height: '100%'
                }}
            >
                <div css={{ gridRow: '1', gridColumn: '1' }}>
                    <h1>Что если отслеживать HTTP 200 OK?</h1>
                    <p>
                        Современные услуги сложны и реализуются работой многих
                        сервисов и API-вызовов.
                    </p>
                    <p>
                        Успешный или неуспешный API-вызов не говорит об успехе
                        или неуспехе операции. Действие пользователя часто
                        прокатывается через множество сервисов, а иногда —
                        организаций.
                    </p>
                    <p>
                        Так, покупка в интернет-магазине может прокатываться
                        через сервисы магазина, склада, операторов доставки,
                        платёжного партнёра, платёжной системы, банка и т. д.
                    </p>
                </div>
                <Panel css={{ gridRow: '1', gridColumn: '2' }}>
                    <ul>
                        <li>
                            Была ли оказана услуга, если после платежа в ленте
                            операций информация появилась только через две
                            минуты?
                        </li>
                        <li>
                            Была ли оказана услуга, если человек оформил ОСАГО,
                            всё прошло гладко, но в НСИС ушли некорректные
                            данные?
                        </li>
                        <li>
                            Была ли оказана услуга, если человек оформил билеты,
                            но они не пришли ему на почту, но видны в
                            приложении?
                        </li>
                    </ul>
                </Panel>
                <div
                    css={{
                        gridRow: '2',
                        gridColumn: '1 / 3',
                        overflow: 'hidden'
                    }}
                >
                    <img
                        src={purchaseChain}
                        alt="Цепочка покупки: магазин, склад, доставка, платёжные сервисы и банк"
                        css={{
                            display: 'block',
                            margin: '0 auto',
                            width: '70%',
                            height: 'auto',
                            position: 'relative',
                            top: -30
                        }}
                    />
                </div>
            </div>
        </LectureContentSlide>
    )
}
