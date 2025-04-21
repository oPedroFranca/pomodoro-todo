import styled from "styled-components";
import { IoIosClose as DefaultClose } from "react-icons/io";

export const Container = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);

  z-index: 10;
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.black[600]};
  border-radius: 10px;
  width: 380px;
  margin-right: 10px;
  max-width: 90%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.black[600]};
  display: flex;
  height: 45px;
  width: 100%;

  border-radius: 10px 10px 0px 0px;

  border-bottom: 2px solid #0000002c;

  align-items: center;
  justify-content: space-between;

  z-index: 10;

  > p {
    margin-left: 15px;
    letter-spacing: 1.5px;
    font-weight: 500;
  }
`;

export const CloseIcon = styled(DefaultClose)`
  font-size: 40px;
  cursor: pointer;

  transition: color ease-in 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.purple[700]};
  }
`;

export const Main = styled.div`
  background-color: ${({ theme }) => theme.colors.black[600]};
  display: flex;
  height: 40px;
  width: 100%;

  padding: 20px;

  height: 100px;

  align-items: center;
  justify-content: space-between;
`;

export const Footer = styled.div`
  background-color: ${({ theme }) => theme.colors.black[700]};
  display: flex;
  width: 100%;

  border-radius: 0px 0px 10px 10px;
  padding: 10px;

  flex-direction: column;
  align-items: end;
  justify-content: center;

  box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.2);
`;

export const ButtonSubmit = styled.button`
  background-color: ${({ theme }) => theme.colors.purple[700]};
  font-weight: 500;

  width: 85px;
  height: 35px;

  border-radius: 5px;

  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translate(1px, -1px) scale(1);
    background-color: ${({ theme }) => theme.colors.purple[600]};
  };
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px; /* Espaço entre o label e o input */
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;

export const Input = styled.input`
  padding: 6px;
  width: 100px;
  border:  1px solid #ffffff96;
  border-radius: 4px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.black[700]};

  font-size: 14px;
  color: ${({ theme }) => theme.colors.purple[600]};
  font-weight: 600;

  transition: border ease-in 0.2s, outline ease-in 0.2s;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.purple[700]};
    outline: 1px solid ${({ theme }) => theme.colors.purple[700]};
  }
`;