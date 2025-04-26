import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black[700]};
  color: ${({ theme }) => theme.font.primary[700]};
`;

export const TimerContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh);
  position: relative;
  padding: 10px 20px 10px 10px;
`

export const PomodoroInfoContainer = styled.div `
  background-color: white;
  
  display: flex;

  width: 100vw;
  /* height: calc(100vh - 40px); */
`