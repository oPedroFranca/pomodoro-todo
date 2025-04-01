import { Timer } from './Components/Timer'
import { PomodoroInfo } from './Components/PomodoroInfo'
import * as S from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
export const Pomodoro = () => {
  return (
    <S.Container>
      <Header />

      <S.TimerContainer>
        <Timer />
      </S.TimerContainer>

      <S.PomodoroInfoContainer>
        <PomodoroInfo />
      </S.PomodoroInfoContainer>

      <Footer />
    </S.Container>
  )
}