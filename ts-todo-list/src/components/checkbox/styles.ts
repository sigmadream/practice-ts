import styled from 'styled-components'

export const StyledCheckbox = styled.div`
  gap: 1.2rem;
  display: grid;
  grid-template-columns: auto 1fr;
  align-self: start;
  position: relative;

  label:hover {
    cursor: pointer;
  }
`

export const CheckboxIcon = styled.span`
  top: -2%;
  left: 5%;
  position: absolute;

  pointer-events: none;
`

export const StyledCheckboxCircle = styled.input`
  width: 1.6rem;
  height: 1.6rem;
  align-self: start;

  border-radius: 50%;
  border: .2rem solid ${(props) => props.theme['blue']};

  outline: none;
  cursor: pointer;

  &:not(:checked):hover,
  &:focus {
    border-color: ${(props) => props.theme['purple']};
  }

  &:checked {
    border: none;
    background-color: ${(props) => props.theme['purple']};

    & + label {
      text-decoration: line-through;
      color: ${(props) => props.theme['gray-300']};
    }
  }
`
