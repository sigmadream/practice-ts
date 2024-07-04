import styled from 'styled-components'

export const StyledCreateTaskButton = styled.button`
  padding: 1.6rem;
  gap: .8rem;
  display: flex;
  align-items: center;

  border: none;
  border-radius: .8rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['blue-dark']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['blue']};
  }

  &:not(:disabled):focus {
    border-color: ${(props) => props.theme['blue']};
  }

  &:disabled {
    opacity: .7;
  }
`
