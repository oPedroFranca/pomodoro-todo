import { FaPen } from "react-icons/fa";
import { IoSaveOutline } from "react-icons/io5";

import styled from 'styled-components';

export const EditIcon = styled(FaPen)`
  color: ${({ theme }) => theme.colors.black[400]};
  font-size: 12px;
  margin-right: 8px;
  
  transition: all 0.3s ease-in-out;
`;

export const SaveIcon = styled(IoSaveOutline)`
  color: ${({ theme }) => theme.colors.black[400]};
  font-size: 16px;
  margin-right: 8px;
  
  transition: all 0.3s ease-in-out;
`;

export const EditContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 90px;
  
  padding: 6px 12px;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 1px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.black[400]};
  border: 1px solid ${({ theme }) => theme.colors.black[400]};
  border-radius: 8px;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple[100]};
    border-color: ${({ theme }) => theme.colors.purple[600]};
    color: ${({ theme }) => theme.colors.purple[600]};
    transform: translate(1px, -1px) scale(1);
    
    svg {
      color: ${({ theme }) => theme.colors.purple[600]};
    }
  }
`;
