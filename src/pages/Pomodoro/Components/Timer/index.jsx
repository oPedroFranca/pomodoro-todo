import { useState, useEffect } from "react";
import * as S from "./styles";

export const Timer = () => {
  const [timerOptions, setTimerOptions] = useState({
    pomodoro: { timer: 25 * 60 * 1000, active: true },  // tempo em milissegundos
    shortBreak: { timer: 5 * 60 * 1000, active: false },
    longBreak: { timer: 15 * 60 * 1000, active: false },
  });

  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("pomodoro");
  const [timeLeft, setTimeLeft] = useState(timerOptions[mode].timer);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 50 : 0));
    }, 50);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    setTimeLeft(timerOptions[mode].timer);
  }, [mode]);

  const toggleTimer = () => setIsRunning(!isRunning);

  const changeMode = (newMode) => {
    setIsRunning(false);
    setTimerOptions((prev) => {
      const updatedOptions = { ...prev };
      Object.keys(updatedOptions).forEach((key) => {
        updatedOptions[key].active = key === newMode;
      });
      return updatedOptions;
    });
    setMode(newMode);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(timerOptions[mode].timer);
  };

  const minutes = Math.floor(timeLeft / 60000); // Calcula os minutos a partir de milissegundos
  const seconds = Math.floor((timeLeft % 60000) / 1000); // Calcula os segundos a partir de milissegundos

  // Cálculo do progresso da barra (0 a 100%)
  const progress = ((timerOptions[mode].timer - timeLeft) / timerOptions[mode].timer) * 100;
  console.log(progress);
  
  return (
    <S.Container>
      <S.ButtonsContainer>
        {Object.keys(timerOptions).map((key) => (
          <S.ButtonOptions
            key={key}
            onClick={() => changeMode(key)}
            active={timerOptions[key].active}
          >
            {key === "pomodoro" ? "Pomodoro" : key === "shortBreak" ? "Short Break" : "Long Break"}
          </S.ButtonOptions>
        ))}
      </S.ButtonsContainer>

      <S.TimerContainer>
        
        <S.Timer>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </S.Timer>
      </S.TimerContainer>

      <S.FooterButtonOptions>
        <S.ButtonConfig >Config</S.ButtonConfig>
        <S.ButtonStartStop onClick={toggleTimer}>{isRunning ? "Stop" : "Start"}</S.ButtonStartStop>
        <S.ButtonReset onClick={resetTimer}>Resetar</S.ButtonReset>
      </S.FooterButtonOptions>
    </S.Container>
  );
};
