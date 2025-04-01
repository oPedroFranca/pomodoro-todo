import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  background-color: ${({ theme }) => theme.colors.black[600]};

  width: 100%;
  height: 40px;
`