import { CiCalendar } from "react-icons/ci";
import { Checkbox } from '../Checkbox';
import * as S from './styles';
import { calculateDaysLeft } from '../../utils/calculateDaysLeft';

export const Tasks = ({ taskData, isNewAnimation, onTaskComplete }) => {
  const daysLeft = calculateDaysLeft(taskData.date);

  return (
    <S.Container isVisible={true} isNew={isNewAnimation}>
      <S.InputWrapper>
        <Checkbox onChange={onTaskComplete} />
        <S.TaskInput isDone={taskData.isDone} value={taskData.name} readOnly />
      </S.InputWrapper>

      {!taskData.isDone && (
        <S.Footer>
          <S.DateInfo>
            <CiCalendar size={16} />
            <span>{taskData.date}</span>
          </S.DateInfo>

          <S.DaysLeftTag>
            <p>{daysLeft > 0 ? `${daysLeft} days left` : 'Created today!'}</p>
          </S.DaysLeftTag>

          <S.PriorityTag priority={taskData.priority}>
            <S.PriorityCircle priority={taskData.priority} />
            <p>{taskData.priority || 'Normal'}</p>
          </S.PriorityTag>
        </S.Footer>
      )}
    </S.Container>
  );
};