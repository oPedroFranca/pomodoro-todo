import styled from 'styled-components';
import { IoIosArrowForward as defaultArrow } from "react-icons/io";

export const FloatingButton = styled.button `
  background-color: #26293D;
  color: white;
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  padding: 22px 5px;
  text-align: center;

  border: 2px solid transparent;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  cursor: pointer;
  
  opacity: ${({ isPomodoroActive }) => (isPomodoroActive ? 1 : 0)};
  visibility: ${({ isPomodoroActive }) => (isPomodoroActive ? "visible" : "hidden")};
  transition: opacity 0.5s ease-in-out 700ms, visibility 0s ease 0s, border ease-in-out 0.3s;

  

  &:hover {
    border: solid 2px #9078D4
  }
`;

export const Arrow = styled(defaultArrow) `
  display: flex;
  font-size: 23px;

  transition: color ease-in-out 0.3s;
  ${FloatingButton}:hover & {
    color: #9078D4;
  }
`