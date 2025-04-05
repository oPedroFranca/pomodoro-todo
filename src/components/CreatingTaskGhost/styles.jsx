import styled from 'styled-components';

export const CreateTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  border: dashed 0.1em #ffffff67;
  box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.2);
  gap: 12px;
  position: relative;

  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Checkbox = styled.div`
  width: 25px;
  height: 25px;
  border: 1px dashed #ffffff67;
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
  color: white;
  font-size: 16px;
  padding: 4px 8px;

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.purple[600]};
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
  color: #ffffff67;
  font-size: 10px;

  svg {
    color: #ffffff67;
  }

  border: dashed 0.11em #ffffff67;

  font-weight: 600;
  border-radius: 50px;
  width: 100px;
  margin-left: 45px;

  letter-spacing: 2px;

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
  color: #ffffff67;
  border: 1px solid #ffffff33;

  &:hover {
    color: ${({ theme }) => theme.colors.purple[400]};
    border-color: ${({ theme }) => theme.colors.purple[400]};
    transform: translate(1px, -1px) scale(1);
  }
`;

export const ConfirmButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.purple[600]};
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple[500]};
    transform: translate(1px, -1px) scale(1);
  }
`;