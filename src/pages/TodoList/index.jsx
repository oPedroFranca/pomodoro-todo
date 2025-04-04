import * as S from './styles';
import { FloatingButton } from './Components/FloatingButton'
import { MainContent } from './Components/MainContent';

export const TodoList = ({ handleSlide, isPomodoroActive }) => {
  return (
    <S.Container>
      <MainContent />
      
      <FloatingButton onClick={handleSlide} isPomodoroActive={isPomodoroActive} />
    </S.Container>
  );
};