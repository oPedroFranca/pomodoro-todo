import { IoAddOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const SumIcon = styled(IoAddOutline)`
  color: white;
  margin: auto;
  font-size: 20px;
  margin-right: 8px;
`;

export const CreateTask = styled.button`
  display: flex;
  
  background-color: ${({ theme }) => theme.colors.purple[700]};
  font-weight: 400;
  font-size: 15px;

  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6px 8px;

  color: white;
  border-radius: 8px;

  transition: font ease-in 0.2s, background-color ease-in 0.2s;
  transition: background-color 0.5s ease-in-out, transform 0.2s ease-in-out, color 0.2s ease-in-out, border 0.2s ease-in-out;

  &:hover {
    transform: translate(1px, -1px) scale(1);
    background-color: ${({ theme }) => theme.colors.purple[600]};
  };
`;