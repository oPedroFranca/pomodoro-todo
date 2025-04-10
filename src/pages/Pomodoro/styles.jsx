import styled from "styled-components";

export const Container = styled.div `
`

export const TimerContainer = styled.div `
  display: flex;
  
  width: 100vw;
  height: calc(100vh);

  flex-direction: column;
  position: relative;

  padding: 10px 20px 10px 10px;
`

export const PomodoroInfoContainer = styled.div `
  background-color: white;
  
  display: flex;

  width: 100vw;
  height: calc(100vh - 40px);
`