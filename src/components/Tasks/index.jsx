import { CiCalendar } from "react-icons/ci";
import { Checkbox } from '../Checkbox';
import * as S from './styles';
import { calculateDaysLeft } from '../../utils/calculateDaysLeft';
import { MenuEdit } from '../../components/MenuEdit';
import { useState } from 'react';

export const Tasks = ({ taskData, isNewAnimation, onTaskComplete, isEditing, index }) => {
  const [priority, setPriority] = useState(taskData.priority || '');
  const [taskName, setTaskName] = useState(taskData.name || '');
  const daysLeft = calculateDaysLeft(taskData.date);

  const onStatusChange = (value) => {
    setPriority(value || '');
    taskData.priority = value || '';
  };

  const handleNameChange = (e) => {
    setTaskName(e.target.value);
    taskData.name = e.target.value;
  };

  return (
    <S.ContainerGhost>

      <S.Container
        isVisible={true}
        isNew={isNewAnimation}
        isEditing={isEditing}
        animationDelay={`${index * 0.2}s`}
      >
        <S.InputWrapper>
          <Checkbox onChange={onTaskComplete} />

          <S.TaskInput
            isDone={taskData.isDone}
            value={taskName}
            readOnly={!isEditing}
            onChange={isEditing ? handleNameChange : undefined}
          />

          {isEditing && (
            <MenuEdit onStatusChange={onStatusChange} />
          )}
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
    </S.ContainerGhost>
  );
};