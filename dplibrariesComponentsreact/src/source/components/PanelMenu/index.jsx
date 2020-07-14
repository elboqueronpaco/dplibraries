import React from 'react'
import { PanelMenuStyled } from './styled'

const PanelMenu = ({ open, children }) => {
    return (
        <PanelMenuStyled open={open}>
            { children }
        </PanelMenuStyled>
    )
}

export default PanelMenu