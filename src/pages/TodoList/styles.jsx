import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  /* background-color: #f5f5f5; */
  color: #333;
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;

  height: 55px;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 60%;
`;

export const ActualDate = styled.p`
  font-weight: 600;
  font-size: 12px;
  color: #ffffffa4;
`;
