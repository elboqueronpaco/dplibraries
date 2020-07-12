import React from 'react'
import { HeaderStyled, HeaderContainerStyled } from './Styled'

export default function Header({ children, height, backgroudColor, maxWidth}) {
    return (
        <HeaderStyled backgroudColor={backgroudColor} height={height}>
            <HeaderContainerStyled maxWidth={maxWidth}>{children}</HeaderContainerStyled>
        </HeaderStyled>
    )
}
