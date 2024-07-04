import styled from 'styled-components'

export const StyledNoTasks = styled.section`
  margin-top: 8.8rem;
  display: grid;
  place-items: center;
`

export const NoTasksImg = styled.img`
  margin-bottom: 1rem;
`

export const NoTasksTitle = styled.h2`
  font-weight: bold;
  color: ${(props) => props.theme['gray-300']};
`

export const NoTasksDescription = styled.p`
  color: ${(props) => props.theme['gray-300']};
`
