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

  width: 390px;
  height: 340px;

  box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.4);
  border-radius: 24px;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  padding: 0px 20px;
  padding-bottom: 13px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 2px solid #00000039;
`

export const ButtonOptions = styled.button`
  background-color: ${({ active, theme }) => (active ? theme.colors.black[700] : "transparent")};
  color: [${({ theme }) => theme.font.primary[700]}];

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

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.black[500]};
    border-radius: 50%;
    padding: 5px;

    transition: all 0.3s ease-in-out;
    &:hover {
      transform: translate(1px, -1px) scale(1);
      color: ${({ theme }) => theme.colors.purple[600]};
    }
  }
`

export const ButtonConfig = styled(defaultGear)`
  font-size: 30px;
  cursor: pointer;
`

export const ButtonStartStop = styled.button`
  background-color: ${({ theme }) => theme.colors.black[700]};
  width: 170px;
  height: 45px;
  font-weight: 500;

  border-radius: 10px;

  border: 2px solid transparent;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.189);

  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translate(2px, -2px) scale(1);
    border: 2px solid ${({ theme }) => theme.colors.purple[600]};
  }
`

export const ButtonReset = styled(defaultReset)`
  font-size: 30px;
  cursor: pointer;
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
   background-color: ${({ theme }) => theme.colors.black[700]};

  width: 200px;
  height: 200px;

  border-radius: 50%;
  margin: auto;

  position: relative;
`

export const Timer = styled.div`
  font-size: 42px;
  font-weight: 500;
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

export const RelaxFocusTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.font.primary[400]};
`

export const StopOne = styled.stop`
  offset: 0%;
  stop-color: ${({ theme }) => theme.colors.purple[800]};
`

export const StopTwo = styled.stop`
  offset: 100%;
  stop-color: ${({ theme }) => theme.colors.purple[500]};
`