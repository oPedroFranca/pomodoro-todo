import styled from "styled-components";
import { MdLightMode, MdNightlight } from "react-icons/md";
export const Container = styled.div`
  display: flex;
  //background-color: ${({ theme }) => theme.colors.black[600]};
  //box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  width: 100%;
  height: 50px;

  padding: 0px 10px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
`
export const LogoContainer = styled.div`

`

export const Title = styled.p`
  font-weight: bold;
  font-size: 35px;
`;

export const LightModeIcon = styled(MdLightMode)`
  color: black ;
  font-size: 18px;
`
export const DarkModeIcon = styled(MdNightlight)`
  color: white;
  font-size: 18px;
`

export const ButtonsheaderContainer = styled.div`
  width: 70px;
  height: 30px;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  background-color: ${({ isActive}) => (isActive) ? '#000000' : 'white'};
  `
export const ButtonTheme = styled.button `
  width: 30px;
  height: 30px;
  border-radius: 30px;
  transform: scale(0.9);
  position: relative;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: ${({ isActive }) => (isActive ? '50px' : '0px')};
    width: 24px;
    height: 24px;
    background-color: blue;
    border-radius: 50%;
    transition: left 0.5s ease;
  }
`
export const ToggleContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`
