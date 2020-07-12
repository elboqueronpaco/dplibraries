import React from 'react'
import { LogoStyle } from './styled'

const Logo = ({children}) => {
    return (
        <LogoStyle>
            {children}
        </LogoStyle>
    )
}

export default Logo