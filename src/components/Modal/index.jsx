import { useState } from 'react';
import * as S from './styles';

export const ModalTimer = ({ onClose, onSubmit, timerOptions, setTimerOptions }) => {
  // Estado local para armazenar os valores antes de salvar
  const [localTimerOptions, setLocalTimerOptions] = useState(timerOptions);

  const handleChange = (mode, value) => {
    setLocalTimerOptions((prev) => ({
      ...prev,
      [mode]: {
        ...prev[mode],
        timer: Math.max(1, Number(value)) * 60 * 1000, // Minutos para ms
      },
    }));
  };

  const handleSubmit = () => {
    setTimerOptions(localTimerOptions); // Atualiza o estado global somente no submit
    onSubmit();
    onClose();
  };

  return (
    <S.Container onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <p></p>
          <p>Timer Settings</p>
          <S.CloseIcon onClick={onClose} />
        </S.Header>

        <S.Main>
          {Object.entries(localTimerOptions).map(([key, { timer }]) => (
            <S.FieldContainer key={key}>
              <S.Label htmlFor={key}>
                {key === "pomodoro" ? "Pomodoro" : key === "shortBreak" ? "Short Break" : "Long Break"}
              </S.Label>
              <S.Input
                id={key}
                type="number"
                min="1"
                value={Math.floor(timer / 60000)}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </S.FieldContainer>
          ))}
        </S.Main>

        <S.Footer>
          <S.ButtonSubmit onClick={handleSubmit}>Submit</S.ButtonSubmit>
        </S.Footer>
      </S.ModalContent>
    </S.Container>
  );
};
