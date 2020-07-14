import React from 'react'
import { bool, string } from 'prop-types'
import { PrimaryButtonLinkStyle, PrimaryButtonStyle } from './styled'
import { func } from 'prop-types'

const Button = props => {
    const { children, href } = props
    const buttonProps = Object.assign({}, props)
    return href
        ? <PrimaryButtonLinkStyle href={href} {...buttonProps}>{children}</PrimaryButtonLinkStyle>
        : <PrimaryButtonStyle {...buttonProps}>{children}</PrimaryButtonStyle>

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

