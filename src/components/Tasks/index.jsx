import { CiCalendar } from "react-icons/ci";
import { Checkbox } from '../Checkbox';
import * as S from './styles';
import { calculateDaysLeft } from '../../utils/calculateDaysLeft';
import { MenuEdit } from '../../components/MenuEdit';
import { useState } from 'react';

export const Tasks = ({ taskData, isNewAnimation, onTaskComplete }) => {
  const [priority, setPriority] = useState(taskData.priority || '');
  const daysLeft = calculateDaysLeft(taskData.date);

  const onStatusChange = (value) => {
    setPriority(value || '');
    taskData.priority = value || '';
  };

  return (
    <S.Container isVisible={true} isNew={isNewAnimation}>
      <S.InputWrapper>
        <Checkbox onChange={onTaskComplete} />
        <S.TaskInput isDone={taskData.isDone} value={taskData.name} readOnly />
        <MenuEdit onStatusChange={onStatusChange} />
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

          {priority && (
            <S.PriorityTag priority={priority}>
              <S.PriorityCircle priority={priority} />
              <p>{priority}</p>
            </S.PriorityTag>
          )}
        </S.Footer>
      )}
    </S.Container>
  );
};