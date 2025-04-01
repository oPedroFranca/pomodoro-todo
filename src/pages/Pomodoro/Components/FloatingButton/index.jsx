import * as S from './styles'
export const FloatingButton = ({ onClick, isPomodoroActive }) => {
  return (
    <S.FloatingButton 
      onClick={onClick} 
      isPomodoroActive={isPomodoroActive}
    >
      <S.Arrow/>
    </S.FloatingButton>
  );
};