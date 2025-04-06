import * as S from './styles';

export const EditTaskButton = ({ onClick, isEditing }) => {
  console.log(isEditing);
  
  return (
    <S.EditContainer onClick={onClick}>
      {isEditing ? <S.SaveIcon /> : <S.EditIcon />}
      {isEditing ? 'Save' : 'Edit'}
    </S.EditContainer>
  );
};
