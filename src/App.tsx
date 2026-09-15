import { useEffect, useState } from 'react'
import { Presentation } from 'web-slides'
import { findLecture, lectures, type Lecture } from './lectures'

function lectureIdFromHash() {
    const match = window.location.hash.match(/^#\/lectures\/([^/]+)$/)
    return match?.[1]
}

function navigate(path: string) {
    window.location.hash = path
}

function CourseHeader() {
    return (
        <header className="site-header">
            <a className="brand" href="#/" onClick={() => navigate('/')}>
                SRE · курс
            </a>
            <span>Университетские лекции</span>
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
            <section className="course-intro">
                <p className="eyebrow">Site Reliability Engineering</p>
                <h1>Лекции, конспекты и слайды в одном месте</h1>
                <p>
                    Каждая лекция — самостоятельная страница с материалами для
                    чтения и презентацией, к которой можно вернуться в любое
                    время.
                </p>
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

    return (
        <article className="lecture-page">
            <a className="back-link" href="#/">
                ← Все лекции
            </a>
            <header className="lecture-page__header">
                <p className="eyebrow">Лекция {lecture.number}</p>
                <h1>{lecture.title}</h1>
                <p>{lecture.summary}</p>
            </header>

            <div className="lecture-page__content">
                <section className="lecture-notes" aria-label="Конспект">
                    <Notes />
                </section>

                {lecture.slides && (
                    <section className="lecture-slides" aria-label="Слайды">
                        <div className="lecture-slides__heading">
                            <p className="section-label">Слайды</p>
                            <span>Вложены в страницу</span>
                        </div>
                        <Presentation slides={lecture.slides} controls />
                    </section>
                )}
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
            <CourseHeader />
            {lecture ? <LecturePage lecture={lecture} /> : <CourseIndex />}
        </main>
    )
}
