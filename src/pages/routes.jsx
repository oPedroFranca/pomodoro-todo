import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from '../App';
import { Login } from './Login';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Rota para a tela de login */}
        <Route path="/" element={<Login />} />

        {/* Rota para o componente principal (Pomodoro e TodoList) */}
        <Route path="/pomodoro" element={<App />} />
      </Routes>
    </Router>
  );
};
