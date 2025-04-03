import styled, { keyframes, css } from "styled-components";
import { IoReload as defaultReset } from "react-icons/io5";
import { PiGear as defaultGear } from "react-icons/pi";
import { FaPlay as defaultPlay } from "react-icons/fa";
import { IoPause as defaultPause } from "react-icons/io5";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black[600]};
  display: flex;

  padding: 15px 0px;

  flex-direction: column;
  justify-content: space-between;
  
  margin: auto;

  width: 400px;
  height: 330px;

  box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.4);
  border-radius: 24px;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  padding: 0px 26px;
  padding-bottom: 13px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 2px solid #00000039;
`

export const ButtonOptions = styled.button`
  background-color: ${({ active, theme }) => (active ? theme.colors.black[700] : "transparent")};
  color: white;

  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  border-radius: 4px;
  padding: 2px 12px;
  height: 28px;

  transition: background-color 0.3s ease, font-weight 0.3s ease;
`

export const FooterButtonOptions = styled.div`
  width: 100%;
  padding: 0px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonConfig = styled(defaultGear)`
  font-size: 30px;
  cursor: pointer;

  transition: color ease-in-out 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.purple[600]};
  }
`

export const ButtonStartStop = styled.button`
  background-color: ${({ theme }) => theme.colors.black[700]};
  width: 150px;
  height: 45px;

  border-radius: 50px;

  border: 2px solid transparent;

  transition: border ease-in-out 0.2s;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.189);

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.purple[600]};
  }
`

export const ButtonReset = styled(defaultReset)`
  font-size: 30px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.purple[600]};
  }
`;

export const ProgressCircle = styled.svg`
  position: absolute;
  width: 200px;
  height: 200px;
  transform: rotate(-90deg);
  z-index: 1;
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */

  width: 200px;
  height: 200px;

  border-radius: 50%;
  margin: auto;

  position: relative;
`

export const Timer = styled.div`
  font-size: 42px;
  font-weight: 400;
`

export const InsideTimerProgress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlayIcon = styled(defaultPlay)`
  font-size: 20px;
  margin-top: 10px;
`

export const PauseIcon = styled(defaultPause)`
  font-size: 20px;
  margin-top: 10px;
`