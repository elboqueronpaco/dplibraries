import styled from '@emotion/styled'

export const BurgerStyled = styled.button`
    position: absolute;
    top: 0;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;
    z-index: 1000;
    outline: none;
    :focus{
        outline: none
        
    }
    
    div{
        width: 2rem;
        height: .25rem;
        background-color: ${props => props.backgroudColor ? `var(--${props.backgroudColor}-color)` : 'var(--default-color)'};
        transition: all .3s linear;
        position: relative;
        transform-origin: 1px;
        border-radius: 10px;
        :first-child{
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        :nth-child(2){
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(-20px)' : 'translateX(0)'} 
        }
        :nth-child(3){
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
`
