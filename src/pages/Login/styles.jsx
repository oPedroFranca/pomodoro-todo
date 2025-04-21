import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black[600]};
`;

export const ImageSection = styled.div`
  flex: 1;
  background-image: url('/logo.svg'); 
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  margin: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.black[700]};
`;

export const FormSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black[600]};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  color: ${({ theme }) => theme.font.primary[700]};

  h2 {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.font.primary[700]};
  }

  label {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 14px;
    color: ${({ theme }) => theme.font.primary[400]};
  }

  input {
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.black[500]};
    color: ${({ theme }) => theme.font.primary[700]};
    margin-bottom: 10px;
  }

  button {
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.purple[700]};
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.purple[600]};
    }
  }
`;

export const ThemeToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.purple[600]};
  background-color: ${({ theme }) => theme.colors.purple[600]};
  color: white;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;