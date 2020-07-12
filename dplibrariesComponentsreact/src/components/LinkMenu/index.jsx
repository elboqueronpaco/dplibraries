import React from 'react'
import { LinkMenuStyled } from './styled'

const LinkMenu = ({ href, children, open, setOpen }) => {
    return (
        <LinkMenuStyled href={href} open={open} onClick={() => setOpen(!open)}>
            {children}
        </LinkMenuStyled>
    )
}

export default LinkMenu