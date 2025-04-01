import { Timer } from './Components/Timer'
import { PomodoroInfo } from './Components/PomodoroInfo'
import * as S from './styles'
export const Pomodoro = () => {
  return (
    <S.Container>
      <S.TimerContainer>
        <Timer />
      </S.TimerContainer>

      <S.PomodoroInfoContainer>
        <PomodoroInfo />
      </S.PomodoroInfoContainer>
    </S.Container>
  )
}