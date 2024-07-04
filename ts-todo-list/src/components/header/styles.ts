import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 20rem;
  display: grid;
  place-items: center;

  background-color: ${(props) => props.theme['gray-700']};
`
