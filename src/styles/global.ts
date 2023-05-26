// RESET
import styled, { createGlobalStyle } from 'styled-components'
// Estilos globais de modo geral
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
`

export const Container = styled.div`
  background-color: ${(props) => props.theme.bg_primary};
  color: ${(props) => props.theme['gray-100']};
  min-height: 100vh;
`

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;
`
export const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.white};
  text-align: center;
  border-bottom: 1px solid #444;
  padding-bottom: 20px;
`
