import styled from 'styled-components';
import { IoMenu, IoTrash, IoChevronDown } from 'react-icons/io5';

export const Container = styled.div`
  position: relative;
`;

export const MenuHamburguer = styled(IoMenu)`
  color: #ffffffa4;
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
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 6px;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black[700]};
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
  padding: 8px 0;

  div {
    padding: 8px 10px;
    color: white;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 6px;
    display: flex;
    gap: 10px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.purple[700]};
    }
  }
`;
