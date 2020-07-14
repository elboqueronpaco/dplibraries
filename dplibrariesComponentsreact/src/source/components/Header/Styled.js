import styled from '@emotion/styled'

export const HeaderStyled = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: ${props => props.backgroudColor ? `var(--${props.backgroudColor}-color)` : 'var(--main-color)'};
    height: ${props => props.height ? `${props.height}vh`: '4vh'};
` 
export const HeaderContainerStyled = styled.section`
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`