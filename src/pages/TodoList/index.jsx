import * as S from './styles';
import { FloatingButton } from './Components/FloatingButton'

export const TodoList = ({ handleSlide, isPomodoroActive }) => {
  return (
    <S.Container>
      <p>To-do Area</p>
      
      <FloatingButton onClick={handleSlide} isPomodoroActive={isPomodoroActive} />
    </S.Container>
  );
};