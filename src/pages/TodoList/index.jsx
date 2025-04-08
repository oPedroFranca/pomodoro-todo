import * as S from './styles';
import { FloatingButton } from './Components/FloatingButton'
import { MainContent } from './Components/MainContent';
import { getCurrentDate } from '../../../src/utils/getCurrentDay';
export const TodoList = ({ handleSlide, isPomodoroActive }) => {
    const currentDate = getCurrentDate()
  
  return (
    <S.Container>
      <S.Header>
        {/* <S.ActualDate>{currentDate}</S.ActualDate> */}
      </S.Header>

      <MainContent />
      
      <FloatingButton onClick={handleSlide} isPomodoroActive={isPomodoroActive} />
    </S.Container>
  );
};