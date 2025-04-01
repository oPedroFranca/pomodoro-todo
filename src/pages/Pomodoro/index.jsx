import { Timer } from './Components/Timer'
import { PomodoroInfo } from './Components/PomodoroInfo'
import * as S from './styles.jsx'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FloatingButton } from './Components/FloatingButton'

export const Pomodoro = ({ handleSlide, isPomodoroActive}) => {
  return (
    <S.Container>
      <Header />

      <S.TimerContainer>
        <Timer />
      </S.TimerContainer>

      <S.PomodoroInfoContainer>
        <PomodoroInfo />
      </S.PomodoroInfoContainer>

      <FloatingButton onClick={handleSlide} isPomodoroActive={isPomodoroActive} />

      <Footer />
    </S.Container>
  )
}