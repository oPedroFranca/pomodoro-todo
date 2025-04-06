import { IoCheckmark, IoClose } from 'react-icons/io5';
import { CiCalendar } from "react-icons/ci";
import * as S from './styles';
import { useState, useRef, useEffect } from 'react';

export const CreatingTaskGhost = ({ setIsCreateButtonClicked, isVisible, inputValueText, submit }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      setInputValue('');
      submit(inputValue);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <S.CreateTaskContainer isVisible={isVisible}>
      <S.InputWrapper>
        <S.Checkbox />
        <S.TaskInput
          ref={inputRef}
          placeholder="Enter Task Name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </S.InputWrapper>

      <S.Footer>
        <S.DateInfo>
          <CiCalendar size={16} />
          <span>--/--/--</span>
        </S.DateInfo>

        <S.ButtonWrapper>
          <S.CancelButton onClick={() => setIsCreateButtonClicked(false)}>
            <IoClose size={20} />
          </S.CancelButton>
          <S.ConfirmButton onClick={handleSubmit}>
            <IoCheckmark size={20} />
          </S.ConfirmButton>
        </S.ButtonWrapper>
      </S.Footer>
    </S.CreateTaskContainer>
  );
};
