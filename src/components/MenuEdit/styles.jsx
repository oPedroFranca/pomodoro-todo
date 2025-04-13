import styled from 'styled-components';
import { IoMenu } from 'react-icons/io5';
import { Checkbox as defaultCheckbox } from '../Checkbox';

export const Container = styled.div`
  position: relative;
`;

export const MenuHamburguer = styled(IoMenu)`
  color:  ${({ theme }) => theme.font.primary[400]};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(1px, -1px) scale(1);
    color: ${({ theme }) => theme.colors.purple[700]};
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 0px;
  right: -105px;
  background-color: ${({ theme }) => theme.colors.black[600]};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 8px 6px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  color:  white;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 6px;
  position: relative;

  &:hover {
    // background-color: ${({ theme }) => theme.colors.black[700]};
  }

  svg {
    color: white;
  }

  &.trash {
    color: #ff0000da;

    svg {
      color: #ff0000da;
    }
  }
  
  span {
    color: white;
  }

  &.status {
    &:hover .status-options {
      display: flex;
    }
  }
`;

export const StatusOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -8px;
  left: 92px;
  background-color: ${({ theme }) => theme.colors.black[600]};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 6px 6px;
`;

export const PriorityButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 6px;
  gap: 10px;

  &:hover {
   //background-color: ${({ theme }) => theme.colors.black[700]};
  }

  cursor: default;
`;

export const Checkbox = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #ffffff67;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  background-color: ${({ checked, theme }) => (checked ? theme.colors.purple[700] : "transparent")};
  border-color: ${({ checked, theme }) => (checked ? theme.colors.purple[700] : "#ffffff67")};

  &:hover {
    transform: translate(1px, -1px) scale(1);
  }
`;
