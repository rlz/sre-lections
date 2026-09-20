import { Panel, useSlidesTheme } from 'rlz-web-slides'
import { LectureContentSlide } from '../../../components/lecture-content-slide'

export function Lecture01ReliabilityBasicsSlide07ReliabilityFactors() {
    const theme = useSlidesTheme()

    const makeLine = (row: number, text: string[]) => {
        return [
            <Panel
                key={`${row}-0`}
                css={[
                    { gridColumn: '1 / 4', gridRow: row },
                    theme.backgrounds.gradient('light')
                ]}
            />,
            <Panel
                key={`${row}-1`}
                css={[
                    { gridColumn: '2 / 4', gridRow: row, margin: 4 },
                    theme.backgrounds.gradient(`accent-${row}`)
                ]}
            />,
            <div
                key={`${row}-2`}
                css={{
                    gridColumn: '1',
                    gridRow: row,
                    padding: theme.spacings.half,
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                {text[0]}
            </div>,
            <div
                key={`${row}-3`}
                css={{
                    gridColumn: '2',
                    gridRow: row,
                    padding: theme.spacings.half,
                    display: 'flex',
                    alignItems: 'center',
                    color: theme.backgrounds.gradient(`accent-${row}`).color
                }}
            >
                {text[1]}
            </div>,
            <Panel
                key={`${row}-4`}
                css={[
                    {
                        gridColumn: '3',
                        gridRow: row,
                        display: 'flex',
                        alignItems: 'center',
                        margin: 8
                    },
                    theme.backgrounds.gradient('dark')
                ]}
            >
                {text[2]}
            </Panel>
        ]
    }

    return (
        <LectureContentSlide number={1}>
            <h1>Как добиться надежности</h1>
            <p>
                Надежность обеспечивается совокупностью всех процессов
                разработки и эксплуатации
            </p>
            <div
                css={{
                    display: 'grid',
                    rowGap: theme.spacings.tight,
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridTemplateRows: '1fr 1fr 1fr',
                    flex: 1,
                    marginTop: '1em'
                }}
            >
                {makeLine(1, [
                    'Архитектура и код',
                    'Оборудование',
                    'Готовность выдерживать нагрузку'
                ])}
                {makeLine(2, [
                    'Внесение изменений (процессы и скорость)',
                    'Обеспеченность ресурсами',
                    'Внешние партнеры/среда'
                ])}
                {makeLine(3, [
                    'Команда, обученность',
                    'Процессы разработки и эксплуатации',
                    'Готовность к реагированию на катастрофы'
                ])}
            </div>
        </LectureContentSlide>
    )
}
