import * as S from './styles'

export const PomodoroInfo = () => {
  return (
    <>
      <S.GlobalStyle />
      <S.UsageInformation>

        <S.Title>
          <h1>
            An online Pomodoro Timer to boost your productivity
          </h1>
        </S.Title>

        <S.Container>

          <S.InfoBox>
            <h2 className="subtitle">What is Pomofocus?</h2>
            <p>
              Pomofocus is a customizable Pomodoro timer that works on desktop and mobile browsers.
              The aim of this app is to help you focus on any task you're working on, such as
              studying, writing, or coding. This app is inspired by the <S.Span>Pomodoro Technique</S.Span>,
              a time management method developed by Francesco Cirillo.
            </p>
          </S.InfoBox>

          <S.InfoBox>
            <h2 className="subtitle">What is the Pomodoro Technique?</h2>
            <p>
              The Pomodoro Technique was created by Francesco Cirillo as a more productive way 
              to work and study. The technique uses a timer to break down work into intervals, 
              traditionally 25 minutes in length, separated by short breaks. Each interval is known
              as a pomodoro, from the Italian word for "tomato", inspired by the tomato-shaped kitchen 
              timer that Cirillo used as a university student. – 
              <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique"> Wikipedia</a>
            </p>
          </S.InfoBox>

          <S.InfoBox>
            <h2>
              How to use the Pomodoro Timer?
            </h2>
            <ol>
              <li><S.Span>Add tasks</S.Span> to work on today;</li>
              <li><S.Span>Set estimated pomodoros</S.Span> (1 = 25min of work) for each task;</li>
              <li><S.Span>Select a task</S.Span> to work on;</li>
              <li><S.Span>Start the timer</S.Span> and focus on the task for 25 minutes;</li>
              <li><S.Span>Take a break</S.Span> for 5 minutes when the alarm rings;</li>
              <li><S.Span>Repeat</S.Span> 3–5 times until the task is done.</li>
            </ol>
          </S.InfoBox>

        </S.Container>
      </S.UsageInformation>
    </>
  )
}