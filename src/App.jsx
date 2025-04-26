import { Pomodoro } from './pages/Pomodoro/index.jsx';
import { TodoList } from './pages/TodoList/index.jsx';
import * as S from './styles.jsx';
import { useRef, useState } from 'react';
import { darkTheme } from './theme/darkTheme.jsx';
import { lightTheme } from './theme/lightTheme.jsx';
import { ThemeProvider } from 'styled-components';

function App() {
  const containerRef = useRef(null);
  const [isPomodoroActive, setIsPomodoroActive] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleSlide = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: isPomodoroActive ? containerRef.current.offsetWidth : 0,
        behavior: 'smooth',
      });
    }
    setIsPomodoroActive(!isPomodoroActive);
  };

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <S.MainContainer ref={containerRef}>
        <S.ThemeToggleButton onClick={toggleTheme}>
          {isDarkTheme ? '🌙 Dark' : '☀️ Ligth'}
        </S.ThemeToggleButton>
        <S.Page>
          <Pomodoro
            handleSlide={handleSlide}
            isPomodoroActive={isPomodoroActive}
          />
        </S.Page>
        <S.Page>
          <TodoList
            handleSlide={handleSlide}
            isPomodoroActive={isPomodoroActive}
          />
        </S.Page>
      </S.MainContainer>
    </ThemeProvider>
  );
}

export default App;