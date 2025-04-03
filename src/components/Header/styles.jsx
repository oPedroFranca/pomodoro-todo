import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  background-color: ${({ theme }) => theme.colors.black[600]};

  width: 100%;
  height: 50px;

  border-radius: 8px;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`