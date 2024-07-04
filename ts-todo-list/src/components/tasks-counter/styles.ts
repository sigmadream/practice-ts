import styled from 'styled-components'

export const StyledTasksCounter = styled.section`
  margin-top: 6.4rem;
  display: flex;
  justify-content: space-between;

  h3 {
    gap: .8rem;
    display: flex;
    align-items: center;

    font-size: 1.4rem;
    font-weight: bold;
  }
`

export const CreatedTasks = styled.h3`
  color: ${(props) => props.theme['blue']};
`

export const TasksDone = styled.h3`
  color: ${(props) => props.theme['purple']};
`

export const Counter = styled.span`
  font-size: 1.2rem;
  border-radius: 3rem;
  padding: .2rem .8rem;

  color: ${(props) => props.theme['gray-200']};
  background-color: ${(props) => props.theme['gray-400']};
`
