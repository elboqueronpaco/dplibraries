import styled from '@emotion/styled'
import colors from '../../colors'
import { Link } from 'wouter'

export const ButtonLinkStyled = styled(Link)`
    border: 1px solid transparent;
    text-decoration: none;
    border-radius: 10px;
    padding: 1rem 2rem;
    font-weight: bold;
    background-color: ${colors.default.background};
    color: ${colors.default.color};
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
    ${({ disable }) => disable && `
        opacity: .3;
        pointer-events: none;
    `}
` 
export const ButtonStyle = ButtonLinkStyled.withComponent('button')
