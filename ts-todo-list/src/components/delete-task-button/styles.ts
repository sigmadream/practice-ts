import styled from 'styled-components'

export const StyledDeleteTaskButton = styled.button`
  padding: .5rem;
  justify-self: end;

  border: none;
  color: ${(props) => props.theme['gray-300']};
  background-color: transparent;

  &:focus,
  &:hover {
    border-radius: .5rem;
    color: ${(props) => props.theme['danger']};
    background-color: ${(props) => props.theme['gray-400']};
  }
`
