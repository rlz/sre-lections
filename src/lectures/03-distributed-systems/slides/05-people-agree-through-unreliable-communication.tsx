import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import familyPhones from '../assets/05-family-phones.png'

export function Lecture03DistributedSystemsSlide05PeopleAgreeThroughUnreliableCommunication() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={3}>
            <Panel
                css={{
                    display: 'grid',
                    gridTemplateRows: 'auto minmax(0, 1fr)',
                    height: '100%',
                    minHeight: 0,
                    padding: 4
                }}
            >
                <div css={{ padding: theme.spacings.half }}>
                    <h1>Люди, как распределенная система</h1>
                    <p>
                        В жизни мы постоянно синхронизируемся друг с друном и
                        договариваемся. При этом люди медленно отвечают и не
                        надежны.
                    </p>
                    <p css={{ marginBottom: 0 }}>
                        Поведение людей хорошо к этому приспособлено и мы
                        понимаем его интуитивно. Поэтому иногда удобно
                        представить, что внутри систем сидят маленькие человечки
                        и договариваются и принимают решения. Метод «маленьких
                        человечков».
                    </p>
                </div>
                <img
                    src={familyPhones}
                    alt="Семья в гостиной: все смотрят в телефоны, только один человек ждёт ответа"
                    css={[
                        {
                            display: 'block',
                            width: '100%',
                            height: 'auto',
                            maxHeight: '100%',
                            alignSelf: 'center',
                            justifySelf: 'center',
                            borderRadius: theme.radius
                        },
                        theme.shadows.low
                    ]}
                />
            </Panel>
        </LectureContentSlide>
    )
}
