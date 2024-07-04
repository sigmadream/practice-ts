import styled from 'styled-components'

export const StyledInput = styled.input`
  border: none;

  padding: 1.6rem;
  border-radius: .5rem;

  font-size: 1.6rem;
  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['gray-500']};

  &::placeholder {
    color: ${(props) => props.theme['gray-300']};
  }
`
