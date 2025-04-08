import * as S from './styles'
import './index.css'
export const PomodoroInfo = () => {
  return (
    <S.Container>
      <section className="usage-information">

        <div className="title-wrapper"><h1 className="title">An online Pomodoro Timer to boost your productivity</h1></div>

        <div className = "container">

          <div className = "item1 box">
            <h2 className="subtitle">What is Pomofocus?</h2>
            <p>
              Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser.
              The aim of this app is to help you focus any task you are working on, such as
              study, writing, or coding. This app is inspired by <span>Pomodoro technique </span>
              which is a time management method developed by Francesco Cirillo
            </p>
          </div>

          <div className = "item2 box">
            <h2 className="subtitle">What is Pomodoro Technique?</h2>
            <p>The Pomodoro Technique is created by Francesco Cirilo for a more productive way 
            to work and study. The technique uses a timer too break down work into intervals, 
            traditionally 25 minutesin length, separated by short breaks. Each interval is known
            as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen 
            timer that Cirillo used as a university student. - 
            <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique"> Wikipedia</a>
            </p>
          </div>

          <div className = "item3 box">
            <h2 className="subtitle">What to use Pomodoro Timer?</h2>
            <ol>
              <li><span>Add tasks</span> to work on today</li>
              <li><span>Set estimate pomodoros</span> (1 = 25min of work) for each tasks</li>
              <li><span>Select a task</span> to work on</li>
              <li><span>Start timer</span> and focus on the task for 25 minutes</li>
              <li><span>Take a break</span> for 5 minutes when the alarm ring</li>
              <li><span>Iterate</span> 3-5 until you finish the tasks</li>
            </ol>
          </div>

        </div>
      </section>
    </S.Container>
  )
}