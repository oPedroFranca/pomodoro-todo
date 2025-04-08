import * as S from './styles'

export const NoTaskMessage = () => {
  return (
    <S.Container>
      <S.Content>
        <S.NoteIcon src="/empty-tasks.svg" alt="Nenhuma tarefa" />
        <S.Title>No task created yet</S.Title>
        <S.Subtitle>How about we start by creating your first task?</S.Subtitle>
      </S.Content>
    </S.Container>
  )
}
