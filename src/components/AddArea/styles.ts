import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid ${(props) => props.theme['gray-500']};
  border-radius: 15px;

  .image {
    margin-right: 5px;
  }

  input {
    border: 0px;
    background: transparent;
    outline: 0;
    color: ${(props) => props.theme.white};
    font-size: 18px;
    flex: 1;
  }
`
