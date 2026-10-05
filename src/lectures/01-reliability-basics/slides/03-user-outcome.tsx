import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import purchaseChain from '../assets/03-purchase-chain.jpg'

export function Lecture01ReliabilityBasicsSlide03UserOutcome() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={1}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '1fr auto',
                    rowGap: theme.spacings.base,
                    columnGap: theme.spacing,
                    height: '100%'
                }}
            >
                <div css={{ gridRow: '1', gridColumn: '1' }}>
                    <h1>А если отслеживать HTTP 200 OK?</h1>
                    <p>
                        Современные услуги зависят от работы многих сервисов,
                        связанных через API.
                    </p>
                    <p>
                        Результат отдельного API-вызова ещё не определяет
                        результат всей операции. Запрос пользователя часто
                        проходит через множество сервисов разных организаций.
                    </p>
                    <p>
                        Так, покупка в интернет-магазине может задействовать
                        сервисы магазина, склада, операторов доставки,
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
                            но в НСИС ушли некорректные данные?
                        </li>
                        <li>
                            Была ли оказана услуга, если человек оформил билеты,
                            но они не пришли ему на почту, хотя видны в
                            приложении?
                        </li>
                    </ul>
                </Panel>
                <div
                    css={{
                        gridRow: '2',
                        gridColumn: '1 / 3'
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
                            borderRadius: theme.radii.base
                        }}
                    />
                </div>
            </div>
        </LectureContentSlide>
    )
}
