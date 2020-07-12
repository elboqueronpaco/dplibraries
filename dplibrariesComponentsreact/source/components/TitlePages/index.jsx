import React from 'react'
import { TitlepagesStyle } from './styled'

const TitlePages = ({ children }) => {
    return (
        <TitlepagesStyle>
            { children }
        </TitlepagesStyle>
    )
}

export default TitlePages