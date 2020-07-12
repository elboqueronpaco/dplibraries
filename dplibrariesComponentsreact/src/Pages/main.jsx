import React from 'react'
import { MainStyled } from './styled'

const Main = ({ children }) => {
    return (
        <MainStyled>
            {children}
        </MainStyled>
    )
}

export default Main