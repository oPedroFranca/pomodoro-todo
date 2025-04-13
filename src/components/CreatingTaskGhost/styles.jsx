import styled from 'styled-components';

export const CreateTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ isVisible }) => (isVisible ? '10px 16px' : '0 16px')};
  border-radius: 8px;
  border: ${({ isVisible, theme }) => isVisible ? `dashed 0.1em ${theme.font.primary[400]}` : 'none'};
  box-shadow: ${({ isVisible }) => (isVisible ? '3px 6px 10px rgba(0, 0, 0, 0.2)' : 'none')};
  gap: ${({ isVisible }) => (isVisible ? '12px' : '0')};
  position: relative;
  margin-bottom: ${({ isVisible }) => (isVisible ? '20px' : '0')};
  overflow: hidden;

  /* Animação de entrada e saída */
  height: ${({ isVisible }) => (isVisible ? 'auto' : '0')};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(-20px)')};
  transition: 
    height 0.3s ease, 
    opacity 0.3s ease, 
    transform 0.3s ease, 
    padding 0.3s ease, 
    margin-bottom 0.3s ease, 
    border 0.3s ease, 
    box-shadow 0.3s ease, 
    gap 0.3s ease;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Checkbox = styled.div`
  width: 25px;
  height: 25px;
  border: 1px dashed ${({ theme }) => theme.font.primary[400]};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TaskInput = styled.input`
  flex: 1;
  height: 40px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.font.primary[700]};
  font-size: 16px;
  padding: 4px 8px;

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.purple[800]};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: auto;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const DateInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;

  gap: 6px;
  color:  ${({ theme }) => theme.font.primary[700]};
  font-size: 10px;

  svg {
    color: ${({ theme }) => theme.font.primary[700]};
  }

  font-weight: 600;
  border-radius: 50px;
  width: 100px;
  margin-left: 40px;

  letter-spacing: 5px;

  padding: 4px;
`;

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  width: 36px;
  height: 36px;

  font-size: 14px;
  border-radius: 4px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export const CancelButton = styled(BaseButton)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.purple[700]};
  border: 1px solid  ${({ theme }) => theme.colors.purple[400]};

  &:hover {
    border-color: ${({ theme }) => theme.colors.purple[700]};
    transform: translate(1px, -1px) scale(1);
  }
`;

export const ConfirmButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.purple[800]};
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple[700]};
    transform: translate(1px, -1px) scale(1);
  }
`;