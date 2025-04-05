import { IoCalendarOutline } from 'react-icons/io5';
import { Checkbox } from '../Checkbox';
import * as S from './styles';

export const Tasks = ({ taskData, isNew }) => {
  return (
    <S.Container isVisible={true} isNew={isNew}>
      <S.InputWrapper>
        <Checkbox />
        <S.TaskInput value={taskData.name} readOnly />
      </S.InputWrapper>

      <S.Footer>
        <S.DateInfo>
          <IoCalendarOutline size={14} />
          <span>{taskData.date}</span>
        </S.DateInfo>
      </S.Footer>
    </S.Container>
  );
};