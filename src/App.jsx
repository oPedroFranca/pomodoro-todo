import { Pomodoro } from './pages/Pomodoro/index.jsx';
import { TodoList } from './pages/TodoList/index.jsx';
import * as S from './styles.jsx';
import { useRef, useState } from 'react';

function App() {
  const containerRef = useRef(null);
  const [isPomodoroActive, setIsPomodoroActive] = useState(true);

  const handleSlide = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: isPomodoroActive ? containerRef.current.offsetWidth : 0,
        behavior: 'smooth',
      });
    }
    setIsPomodoroActive(!isPomodoroActive);
  };

  return (
    <S.MainContainer ref={containerRef}>
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
  );
}

export default App;