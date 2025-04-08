import { useState, useEffect } from "react";
import * as S from "./styles";
import { darkTheme } from '../../../../theme/darkTheme';
import { ModalTimer } from '../../../../components/Modal'
import { toast } from 'react-toastify';
import { ToastProvider } from '../../../../components/ToastProvider'

export const Timer = () => {
  const notify = () => toast("Wow, Successful updated time!");

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
  }, [timerOptions, mode]);

  const toggleTimer = () => setIsRunning(!isRunning);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(timerOptions[mode].timer);
  };

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

  const handleModalSubmit = () => {
    notify();
    setIsRunning(false);
    setTimerOptions((prev) => ({ ...prev }));
    setTimeLeft(timerOptions[mode].timer);
  };

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);
  const progress = ((timerOptions[mode].timer - timeLeft) / timerOptions[mode].timer) * 100;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
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
        <S.ProgressCircle>
          <defs>
            <linearGradient id="gradientProgress" x1="0%" y1="0%" x2="100%" y2="100%">
              <S.StopOne/>
              <S.StopTwo/>
            </linearGradient>
          </defs>

          <circle
            cx="100"
            cy="100"
            r="90"
            stroke={darkTheme.colors.black[600]}
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="url(#gradientProgress)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray="565.48"
            strokeDashoffset={565.48 - (progress / 100) * 565.48}
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
            strokeLinecap="round"
          />
        </S.ProgressCircle>

        <S.InsideTimerProgress>
          {/* <p style={{ fontSize: '30px' }}>
            {mode === "pomodoro" ? "🍅" : "☕"}
          </p> */}

          <S.Timer>
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </S.Timer>

          <S.RelaxFocusTitle>
            {mode === "pomodoro" ? "FOCUS" : "RELAX"}
          </S.RelaxFocusTitle>

          {!isRunning ? (
            <S.PlayIcon />
          ) : (
            <S.PauseIcon />
          )}
        </S.InsideTimerProgress>
      </S.TimerContainer>

      <S.FooterButtonOptions>
        <div>
          <S.ButtonConfig onClick={toggleModal} />
        </div>
        <S.ButtonStartStop onClick={toggleTimer}>{isRunning ? "Stop" : "Start"}</S.ButtonStartStop>

        <div>
          <S.ButtonReset onClick={resetTimer} />
        </div>
      </S.FooterButtonOptions>

      {isModalOpen &&
        <ModalTimer
          onSubmit={handleModalSubmit}
          onClose={toggleModal}
          timerOptions={timerOptions}
          setTimerOptions={setTimerOptions}
        />
      }

      <ToastProvider />
    </S.Container>
  );
};
