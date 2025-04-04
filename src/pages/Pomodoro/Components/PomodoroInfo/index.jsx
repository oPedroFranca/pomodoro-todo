import * as S from './styles'
export const PomodoroInfo = () => {
  return (
    <S.Container>
      <section className="usage-information">
        <div className = "container">
          <h1 className="title">An online Pomodoro Timer to boost your productivity</h1>

          <h2 className="subtitle">What is Pomofocus?</h2>
          <p>Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser.
            he aim of this app is to help you focus any task you are working on, such as
            study, writing, or coding. This app is inspired by <span>Pomodoro technique </span>
            which is a time management method developed by Francesco Cirillo
          </p>

          <h2 className="subtitle">What is Pomodoro Technique?</h2>
          <p>The Pomodoro Technique is created by Francesco Cirilo for a more productive way 
          to work and study. The technique uses a timer too break down work into intervals, 
          traditionally 25 minutesin length, separated by short breaks. Each interval is known
          as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen 
          timer that Cirillo used as a university student. - 
          <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique"> Wikipedia</a>
          </p>

          <h2 className="subtitle">What to use Pomodoro Timer?</h2>
          <ol>
            <li>1. <span>Add tasks</span> to work on today</li>
            <li>2. <span>Set estimate pomodoros</span> (1 = 25min of work) for eacgh tasks</li>
            <li>3. <span>Select a task</span> to work on</li>
            <li>4. <span>Start timer</span> and focus on the task for 25 minutes</li>
            <li>5. <span>Take a break</span> for 5 minutes when the alarm ring</li>
            <li>5. <span>Iterate</span> 3-5 until you finish the tasks</li>
          </ol>
        </div>
      </section>
    </S.Container>
  )
}