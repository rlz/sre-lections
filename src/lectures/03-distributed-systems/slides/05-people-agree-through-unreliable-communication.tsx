import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import familyPhones from '../assets/05-family-phones.jpg'

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
                    <h1>Люди как распределённая система</h1>
                    <p>
                        В жизни мы постоянно согласуем действия друг с другом.
                        При этом люди могут отвечать медленно, забывать о
                        сообщениях и ошибаться.
                    </p>
                    <p css={{ marginBottom: 0 }}>
                        Такие ситуации знакомы нам по опыту. Поэтому удобно
                        представить узлы системы людьми, которые обмениваются
                        сообщениями и принимают решения. Это метод «маленьких
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
