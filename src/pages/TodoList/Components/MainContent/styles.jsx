import styled from "styled-components";
import { IoSearch } from 'react-icons/io5';

export const Container = styled.div`
  display: flex;
  width: 55%;
  height: 100vh;
  color: #333;

  flex-direction: column;
  align-items: center;

  border-radius: 8px;

  padding: 10px;
`;

export const Header = styled.div`
  display: flex;

  height: 50px;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid ${({ theme }) => theme.colors.black[600]};

  width: 100%;

  > p:last-child {
    width: 200px;
  } 
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
`;

export const Main = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
  height: 50px;
  align-items: center;

  width: 100%;
`;


export const CreateTaskButton = styled.button`
  display: flex;
  width: 100%;
  height: 60px;

  align-items: center;
  justify-content: center;

  border-radius: 4px;
  border: dashed 0.11em white;

  font-size: 18px;
  font-weight: 600;
  color: white;

  box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.2);

  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black[500]};
    transform: scale(1.05);
  }
`;


