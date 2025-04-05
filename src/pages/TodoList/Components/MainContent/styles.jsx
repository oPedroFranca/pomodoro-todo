import styled from "styled-components";
import { IoSearch, IoAddOutline } from 'react-icons/io5';

export const Container = styled.div`
  width: 58%;
  height: 100vh;
  color: #333;

  flex-direction: column;

  border-radius: 8px;

  padding: 10px;
`;

export const TextTitle = styled.h1`
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 400;
  color: aliceblue;
`

export const Header = styled.div`
  display: flex;

  height: 55px;
  margin-bottom: 50px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black[600]};

  width: 100%;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:focus-within svg {
    color: ${({ theme }) => theme.colors.purple[600]};
  }
`;

export const SearchIcon = styled(IoSearch)`
  position: absolute;
  left: 10px;
  color: #ffffffa4;
  font-size: 16px;
  transition: color 0.3s ease;
`;

export const Search = styled.input`
  background-color: ${({ theme }) => theme.colors.black[600]};
  color: ${({ theme }) => theme.colors.purple[600]};

  width: 200px;
  height: 28px;
  padding: 5px 10px 5px 35px;
  
  border-radius: 20px;
  border: 1px solid transparent;
  outline: none;
  font-size: 12px;

  transition: border 0.3s ease;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.purple[600]};
  }
`;

export const ActualDate = styled.p`
  font-weight: 600;
  font-size: 12px;
  color: #ffffffa4;
  margin-right: 95px;
`;

