import React from 'react'
import { ItemMenuStyled } from './styled'

const ItemMenu = ({ children }) => {
    return (
        <ItemMenuStyled>
            { children }
        </ItemMenuStyled>
    )
}

export default ItemMenu