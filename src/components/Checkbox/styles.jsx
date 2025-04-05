import styled from "styled-components";

export const Checkbox = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid #ffffff67;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  background-color: ${({ checked, theme }) => (checked ? theme.colors.purple[600] : "transparent")};
  border-color: ${({ checked, theme }) => (checked ? theme.colors.purple[600] : "#ffffff67")};

  &:hover {
    border-color: ${({ theme }) => theme.colors.purple[600]};
  }
`;
