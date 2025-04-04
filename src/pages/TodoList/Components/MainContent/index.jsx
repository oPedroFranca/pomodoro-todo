import { getCurrentDate } from '../../../../utils/getCurrentDay';
import * as S from './styles'
export const MainContent = () => {
  const currentDate = getCurrentDate()
  return (
    <S.Container>
      <S.Header>
        <S.SearchContainer>
          <S.SearchIcon />
          <S.Search placeholder="Search" />
        </S.SearchContainer>
        <S.ActualDate>{currentDate}</S.ActualDate>
        <p></p>
      </S.Header>

      {/* <S.CreateTaskButton>Create Task</S.CreateTaskButton> */}
    </S.Container>
  );
}