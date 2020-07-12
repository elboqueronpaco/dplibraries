import styled from '@emotion/styled'
import { Link as LinkStyled } from 'wouter'

export const Link = styled(LinkStyled)`
    border: 1px solid transparent;
    text-decoration: none;
    border-radius: 10px;
    padding: 1rem 2rem;
    font-weight: bold;
    background-color: ${props => props.backgroudColor ? `var(--${props.backgroudColor}-color)` : 'var(--default-color)'};
    color: ${ props => props.textColor ? `var(--${props.textColor}-color)`: 'var(--text-color)'};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    opacity: .6;
    cursor: pointer;
    
    transition: all .3s ease;
    :hover{
        opacity: 1;
        transform: scale(1.125)
    }
    [disabled]{
        opacity: .3;
        pointer-events: none;
    }
` 
export const Button = Link.withComponent('button')