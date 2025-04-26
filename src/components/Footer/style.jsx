import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const Letters = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;

  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: white;
    }
  }
`;

