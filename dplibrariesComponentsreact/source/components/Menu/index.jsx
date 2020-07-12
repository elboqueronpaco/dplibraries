import React from 'react'
import { MenuStyled } from './styled'

const Menu = ({ children }) => {
    return (
        <MenuStyled>
            { children }
        </MenuStyled>
    )
}

export default Menu 