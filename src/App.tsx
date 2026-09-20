import { useEffect, useState } from 'react'
import { Presentation } from 'rlz-web-slides'
import authorPhoto from './assets/dmitry-maslennikov.png'
import telegramQr from './assets/telegram-sre-pub-qr.svg'
import { findLecture, lectures, type Lecture } from './lectures'

function lectureIdFromHash() {
    const match = window.location.hash.match(/^#\/lectures\/([^/]+)$/)
    return match?.[1]
}

function CourseHeader() {
    const firstLecture = lectures[0]

    return (
        <header className="lecture-toolbar">
            <a className="lecture-toolbar__brand" href="#/">
                SRE — лекции
            </a>
            <h1 className="lecture-toolbar__title">Список лекций</h1>
            <nav className="lecture-toolbar__navigation" aria-label="Лекции">
                <span aria-hidden="true">←</span>
                <a
                    href={`#/lectures/${firstLecture.id}`}
                    aria-label="Следующая: лекция 1"
                    title="Лекция 1"
                >
                    →
                </a>
            </nav>
        </header>
    )
}

function LectureCard({ lecture }: { lecture: Lecture }) {
    const isAvailable = lecture.status === 'available'

    return (
        <article className="lecture-card">
            <div className="lecture-card__meta">
                <span>Лекция {lecture.number}</span>
                <span>{lecture.duration}</span>
            </div>
            <h2>{lecture.title}</h2>
            <p>{lecture.summary}</p>
            <a href={`#/lectures/${lecture.id}`}>
                {isAvailable ? 'Открыть конспект →' : 'Открыть страницу →'}
            </a>
        </article>
    )
}

function CourseIndex() {
    return (
        <>
            <section className="course-author" aria-labelledby="author-title">
                <img
                    className="course-author__photo"
                    src={authorPhoto}
                    alt="Дмитрий Масленников"
                />
                <div>
                    <p className="section-label">Об авторе</p>
                    <h2 id="author-title">Дмитрий Масленников</h2>
                    <p>Я руковожу SRE в Т-Банке. В IT больше 20 лет.</p>
                    <p>
                        Работал разработчиком: занимался системным
                        программированием, backend- и frontend-разработкой,
                        проектировал и эксплуатировал высоконагруженные
                        распределённые системы. В Iponweb проектировал BidSwitch
                        — рекламную платформу с нагрузкой порядка 2 млн запросов
                        в секунду. Затем работал SRE в Google, в команде Google
                        Search.
                    </p>
                    <p>
                        Сейчас руковожу направлением SRE в Т-Банке: занимаюсь
                        надёжностью информационных систем, организацией on-call,
                        управлением инцидентами, требованиями к надёжности и
                        развитием SRE-практик в масштабах большой
                        технологической организации.
                    </p>
                    <p>
                        Преподаю эксплуатацию и обеспечение бесперебойной работы
                        информационных систем на ФКН ВШЭ, читаю лекции в других
                        вузах, регулярно выступаю и провожу стримы на темы SRE и
                        устройства сложных IT-систем.
                    </p>
                    <p>
                        Этот курс — моя попытка систематизировать практический
                        опыт эксплуатации систем: не только рассказать, какие
                        инструменты и практики существуют в SRE, но и объяснить,
                        зачем они нужны, где работают, где перестают работать и
                        какие инженерные идеи за ними стоят.
                    </p>
                    <a
                        className="course-author__telegram"
                        href="https://t.me/sre_pub"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>Обсуждаем SRE в Telegram: @sre_pub →</span>
                        <img
                            src={telegramQr}
                            alt="QR-код Telegram-чата @sre_pub"
                        />
                    </a>
                </div>
            </section>
            <section className="lecture-list" aria-label="Программа курса">
                {lectures.map((lecture) => (
                    <LectureCard key={lecture.id} lecture={lecture} />
                ))}
            </section>
        </>
    )
}

function LecturePage({ lecture }: { lecture: Lecture }) {
    const Notes = lecture.Notes
    const lectureIndex = lectures.indexOf(lecture)
    const previousLecture = lectures[lectureIndex - 1]
    const nextLecture = lectures[lectureIndex + 1]

    return (
        <article className="lecture-page">
            <header className="lecture-toolbar">
                <a className="lecture-toolbar__brand" href="#/">
                    SRE — лекции
                </a>
                <span>Лекция {lecture.number}</span>
                <nav
                    className="lecture-toolbar__navigation"
                    aria-label="Лекции"
                >
                    <a
                        href={
                            previousLecture
                                ? `#/lectures/${previousLecture.id}`
                                : '#/'
                        }
                        aria-label={
                            previousLecture
                                ? `Предыдущая: лекция ${previousLecture.number}`
                                : 'Предыдущая: список лекций'
                        }
                        title={
                            previousLecture
                                ? `Лекция ${previousLecture.number}`
                                : 'Список лекций'
                        }
                    >
                        ←
                    </a>
                    {nextLecture ? (
                        <a
                            href={`#/lectures/${nextLecture.id}`}
                            aria-label={`Следующая: лекция ${nextLecture.number}`}
                            title={`Лекция ${nextLecture.number}`}
                        >
                            →
                        </a>
                    ) : (
                        <span aria-hidden="true">→</span>
                    )}
                </nav>
            </header>
            <header className="lecture-page__header">
                <h1>{lecture.title}</h1>
                <p>{lecture.summary}</p>
            </header>

            <div className="lecture-page__content">
                {lecture.slides && (
                    <section className="lecture-slides" aria-label="Слайды">
                        <Presentation slides={lecture.slides} controls />
                    </section>
                )}

                <section className="lecture-notes" aria-label="Конспект">
                    <Notes />
                </section>
            </div>
        </article>
    )
}

export function App() {
    const [lectureId, setLectureId] = useState(lectureIdFromHash)

    useEffect(() => {
        const updateLocation = () => setLectureId(lectureIdFromHash())
        window.addEventListener('hashchange', updateLocation)
        return () => window.removeEventListener('hashchange', updateLocation)
    }, [])

    const lecture = findLecture(lectureId)

    return (
        <main className="site-shell">
            {lecture ? (
                <LecturePage lecture={lecture} />
            ) : (
                <>
                    <CourseHeader />
                    <CourseIndex />
                </>
            )}
        </main>
    )
}
