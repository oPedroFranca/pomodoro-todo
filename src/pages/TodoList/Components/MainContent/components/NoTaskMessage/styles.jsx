import styled from 'styled-components'
import { PiNote } from "react-icons/pi";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 30px;
  background-color: transparent;
`

export const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NoteIcon = styled(PiNote)`
  width: 150px;
  height: auto;
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.black[500]};
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.font.primary[400]};
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 30px;
`

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.font.primary[400]};
  font-size: 14px;
  margin-top: 10px;
`
