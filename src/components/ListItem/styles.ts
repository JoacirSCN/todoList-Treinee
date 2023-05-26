import styled from 'styled-components'

interface ContainerProps {
  done: boolean
}

export const Container = styled.div(
  ({ done }: ContainerProps) => `
display: flex;
background-color: ${(props: any) => props.theme['gray-900']};
padding: 10px;
border-radius: 10px;
margin-bottom: 10px;
align-items: center;

input {
  width: 25px;
  height: 25px;
  margin-right: 5px;
}

label {
  color: ${(props: any) => props.theme['gray-100']};
  text-decoration: ${done ? 'line-through' : 'initial'}
}
`,
)
