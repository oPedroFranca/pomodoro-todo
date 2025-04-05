import { IoCalendarOutline, IoCheckmark, IoClose } from 'react-icons/io5';
import * as S from './styles';
import { useState } from 'react';
export const CreatingTaskGhost = ({ setIsCreateButtonClicked, isVisible, inputValueText, submit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    setInputValue('');
    submit(inputValue);
  };

  return (
    <S.CreateTaskContainer isVisible={isVisible}>
      <S.InputWrapper>
        <S.Checkbox />
        <S.TaskInput
          placeholder="Enter Task Name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </S.InputWrapper>

      <S.Footer>
        <S.DateInfo>
          <IoCalendarOutline size={14} />
          <span>--/--/--</span>
        </S.DateInfo>

        <S.ButtonWrapper>
          <S.CancelButton onClick={() => setIsCreateButtonClicked(false)}>
            <IoClose size={20} />
          </S.CancelButton>
          <S.ConfirmButton onClick={() => handleSubmit()}>
            <IoCheckmark size={20} />
          </S.ConfirmButton>
        </S.ButtonWrapper>
      </S.Footer>

    </S.CreateTaskContainer>
  );
};