import styled from "styled-components";

export const Container = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  border: solid 1px #ffffff67;
  box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.2);
  gap: 12px;
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;

  opacity: ${({ isNew }) => (isNew ? 0 : 1)};
  transform: ${({ isNew }) => (isNew ? 'translateY(-20px)' : 'translateY(0)')};
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translate(2px, -2px) scale(1);
  }
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
  color: white;
  font-size: 16px;
  padding: 4px 8px;

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.purple[600]};
  }

  color: white;
`;
export const Footer = styled.div`
  display: flex;
  padding-left: 45px;
  gap: 10px;
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

  border: solid 1px #ffffff67;

  font-weight: 600;
  border-radius: 50px;
  width: 120px;

  letter-spacing: 2px;
  padding: 4px;
`;

export const TextTitle = styled.h1`
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 400;
  color: aliceblue;
`