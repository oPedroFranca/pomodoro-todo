import styled from "styled-components";

export const Container = styled.div `
  background-color: ${({ theme }) => theme.colors.black[600]};
  
  margin: auto;
  display: flex;

  width: 380px;
  height: 300px;

  border-radius: 24px;
`