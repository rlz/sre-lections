import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'
import outageUsersImage from '../assets/02-outage-users.png'

export function Lecture02BuildingReliableSoftwareSlide02Failure() {
    const theme = useSlidesTheme()

    return (
        <LectureContentSlide number={2}>
            <div
                css={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: theme.spacing,
                    height: '100%'
                }}
            >
                <div
                    css={{
                        display: 'grid',
                        gridTemplateRows: 'auto minmax(0, 1fr)',
                        gap: theme.spacings.half,
                        minWidth: 0
                    }}
                >
                    <div>
                        <h1>Сбой</h1>
                        <p>
                            Сбоем назовём{' '}
                            <strong>
                                существенное отклонение от нормальной работы,
                                которое замечают пользователи
                            </strong>
                            .
                        </p>
                    </div>
                    <img
                        alt="График успешных операций с резким падением и пользователями, не сумевшими оплатить покупку"
                        src={outageUsersImage}
                        css={{
                            width: '100%',
                            height: 'auto',
                            alignSelf: 'end',
                            borderRadius: theme.radius,
                            boxShadow: '0 8px 24px rgba(49, 48, 43, 0.18)'
                        }}
                    />
                </div>
                <Panel css={theme.backgrounds.gradient('accent-1')}>
                    <h2>Нюансы</h2>
                    <p>
                        Мы в ТБанке различаем <strong>«сбой»</strong> и{' '}
                        <strong>«инцидент»</strong>. Инцидентом мы называем
                        любое, даже минимальное отклонение в работе.
                    </p>
                    <p>
                        Полезно различать массовые проблемы, и менее
                        значительные. Одно состояние требует{' '}
                        <strong>
                            незамедлительной реакции и круглосуточного
                            устранения
                        </strong>
                        , а другое исправляется <strong>планово</strong>.
                    </p>
                    <p>
                        SRE занимаются в основном сбоями — острыми ситуациями
                        требующими незамедлительной реакции.
                    </p>
                </Panel>
            </div>
        </LectureContentSlide>
    )
}
