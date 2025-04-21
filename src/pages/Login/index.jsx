import * as S from './styles.jsx';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../theme/darkTheme.jsx';
import { lightTheme } from '../../theme/lightTheme.jsx';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const handleLogin = () => {
    navigate('/pomodoro');
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <S.Container>
        <S.ImageSection />
        <S.FormSection>
          <S.Form>
            <h2>Login</h2>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Enter your password" />

            <button onClick={handleLogin}>Login</button>
          </S.Form>
        </S.FormSection>
        <S.ThemeToggleButton onClick={toggleTheme}>
          {isDarkTheme ? '☀️ Claro' : '🌙 Escuro'}
        </S.ThemeToggleButton>
      </S.Container>
    </ThemeProvider>
  );
};