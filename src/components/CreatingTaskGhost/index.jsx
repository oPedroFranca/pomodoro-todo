import { IoCalendarOutline, IoCheckmark, IoClose } from 'react-icons/io5';
import * as S from './styles';

export const CreatingTaskGhost = () => {

  return (
    <S.CreateTaskContainer>
      <S.InputWrapper>
        <S.Checkbox />
        <S.TaskInput placeholder="Enter Task Name..." />
      </S.InputWrapper>

      <S.Footer>
        <S.DateInfo>
          <IoCalendarOutline size={14} />
          <span>--/--/--</span>
        </S.DateInfo>

        <S.ButtonWrapper>
          <S.CancelButton>
            <IoClose size={20} />
          </S.CancelButton>
          <S.ConfirmButton>
            <IoCheckmark size={20} />
          </S.ConfirmButton>
        </S.ButtonWrapper>
      </S.Footer>
    </S.CreateTaskContainer>
  );
};
