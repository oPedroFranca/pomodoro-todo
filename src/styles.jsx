import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  background-color: ${({ theme }) => theme.colors.black[700]};
  color: ${({ theme }) => theme.font.primary[700]};
  position: relative;
  transition: background-color 0.3s ease, color 0.3s ease;
`

export const Page = styled.div`

`

export const ThemeToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.purple[700]};
  color: white;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 10px;

  &:hover {
    transform: scale(1.05);
  }
`;