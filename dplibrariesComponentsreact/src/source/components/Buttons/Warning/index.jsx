import React from 'react'
import { bool, string } from 'prop-types'

import { func } from 'prop-types'
import { WarningButtonLinkStyle, WarningButtonStyle } from './styled'


const Button = props => {
    const { children, href } = props
    const buttonProps = Object.assign({}, props)
    return href
        ? <WarningButtonLinkStyle href={href} {...buttonProps}>{children}</WarningButtonLinkStyle>
        : <WarningButtonStyle {...buttonProps}>{children}</WarningButtonStyle>

}
Button.propTypes = {
    children: string,
    className: string,
    disabled: bool,
    href: string,
    autoComplete: string,
    autoFocus: bool,
    id: string,
    name: string,
    onClick: func,
    type: string
}
export default Button

