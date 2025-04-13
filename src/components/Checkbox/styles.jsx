import styled from "styled-components";

export const Checkbox = styled.div`
  width: 28px;
  height: 28px;
  border: 1px solid #ffffff67;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  background-color: ${({ checked, theme }) => (checked ? theme.colors.purple[600] : "transparent")};
  border-color: ${({ checked, theme }) => (checked ? theme.colors.purple[600] : theme.colors.black[600])};

  &:hover {
    border-color: ${({ theme }) => theme.colors.purple[600]};
    transform: translate(1px, -1px) scale(1);
  }
`;
