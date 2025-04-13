import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1F232E;
    color: white;
  }

  h2 {
    padding: 30px 0px;
  }

  ol {
    margin-left: 1.9vh;
    font-size: 1.2em;
  }

  p {
    font-size: 1.2em;
  }

  span,
  a {
    color: #7960d1;
`

export const UsageInformation = styled.section`
  background-color: #1F232E;
  width: 100vw;
  height: calc(100vh - 40px);
`
export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  padding-top: clamp(3rem, 3vh, 8rem);
  padding: 1rem 2rem;

  font-size: 2rem;
  text-align: center;
  position: relative;
  color: #7960d1;
`

export const Container = styled.div`
  height: 80vh;
  width: 100vw;

  display: flex;   
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 3em;
  flex-grow: 1;

  padding: 0 clamp(1rem, 5vw, 6rem);
  padding-bottom: clamp(2rem, 10vh, 8rem);
`
export const InfoBox = styled.div`
  width: 26em;
  height: 28em;

  background-color: #14161e;

  box-shadow: 5px 5px 25px #7960d1;
  padding: 0px 30px;
  border-radius: 10px;
  flex-shrink: 1;

  color: white;
`

