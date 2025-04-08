import * as S from './styles'

export const CreateTaskButton = ({ onClick }) => {
  return (
    <S.CreateTask onClick={onClick}>
      <S.SumIcon />
      New Task
    </S.CreateTask>
  );
}