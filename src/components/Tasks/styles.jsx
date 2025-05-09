import styled, { keyframes, css } from 'styled-components';

const float = keyframes`
  0% { transform: translate(0px, -0px); }
  50% { transform: translate(4px, -8px); }
  100% { transform: translate(0px, -0px); }
`;

export const ContainerGhost = styled.div`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.colors.black[600]};
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black[700]};
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  padding: 10px 16px;
  border-radius: 10px;
  border: solid 1px #ffffff67;
  box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.2);
  gap: 12px;

  opacity: ${({ isNew }) => (isNew ? 0 : 1)};
  transform: ${({ isNew }) => (isNew ? 'translateY(-20px)' : 'translateY(0)')};
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translate(2px, -2px) scale(1);
  }

  ${({ isEditing, animationDelay }) =>
    isEditing &&
    css`
      animation: ${float} 3s ease-in-out infinite;
      animation-delay: ${animationDelay || '0s'};
    `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: auto;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TaskInput = styled.input`
  flex: 1;
  height: 40px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.font.primary[700]};
  font-size: 16px;
  padding: 4px 8px;

  text-decoration: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
  color: ${({ isDone, theme }) => isDone ? theme.font.primary[400] : theme.font.primary[400]};

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.purple[600]};
  }

  cursor: default;
`;
export const Footer = styled.div`
  display: flex;
  padding-left: 30px;
  gap: 10px;
  font-size: 11px;
`;

export const PriorityCircle = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ priority }) =>
    priority === 'High'
      ? '#D9276C'
      : priority === 'Low'
        ? '#47b6f6'
        : '#7C3DEC'};
`;

export const DateInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;

  gap: 6px;
  color: ${({ theme }) => theme.font.primary[400]};;

  svg {
    color: ${({ theme }) => theme.font.primary[400]};
  }

  font-weight: 600;
  border-radius: 50px;
  width: 120px;

  letter-spacing: 2px;
  padding: 4px;
`;

export const PriorityTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: ${({ priority, theme }) =>
    priority === 'High'
      ? '#d9276b2e'
      : priority === 'Low'
        ? '#47b6f62a'
        : '#7d3dec2a'};
      

  color: ${({ priority, theme }) =>
    priority === 'High'
      ? '#D9276C'
      : priority === 'Low'
        ? '#47b6f6'
        : '#7C3DEC'};;
  padding: 4px 10px;
  font-weight: 600;
  border-radius: 50px;
  height: 24px;

  letter-spacing: 1px;
  > p {
    margin: auto;
  }
`;

export const DaysLeftTag = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.black[600]};
  color: #ffffffa4;
  font-weight: 400;
  padding: 4px 8px;
  border-radius: 12px;
  height: 24px;

  letter-spacing: 1px;
  > p {
    margin: auto;
  }
`;