import { useState } from 'react'
import { getCurrentDate } from '../../../../utils/getCurrentDay';
import { CreateTaskButton } from '../../../../components/CreateTaskButton'
import * as S from './styles'
import { CreatingTaskGhost } from '../../../../components/CreatingTaskGhost'

export const MainContent = () => {
  const [search, setSearch] = useState(false)
  const currentDate = getCurrentDate()

  return (
    <S.Container>
      <S.Header>
        <S.SearchContainer>
          <S.SearchIcon />
          <S.Search placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        </S.SearchContainer>

        <S.ActualDate>{currentDate}</S.ActualDate>

        <CreateTaskButton />
      </S.Header>

      <S.TextTitle>Tasks - 0</S.TextTitle>
      <CreatingTaskGhost />

      <S.TextTitle>Done - 0</S.TextTitle>
    </S.Container>
  );
}