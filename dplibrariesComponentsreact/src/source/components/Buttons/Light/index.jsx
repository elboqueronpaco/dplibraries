import React from 'react'
import { bool, string } from 'prop-types'
import { func } from 'prop-types'
import { LightButtonLinkStyle, LightButtonStyle } from './styled'

const Button = props => {
    const { children, href } = props
    const buttonProps = Object.assign({}, props)
    return href
        ? <LightButtonLinkStyle href={href} {...buttonProps}>{children}</LightButtonLinkStyle>
        : <LightButtonStyle{...buttonProps}>{children}</LightButtonStyle>

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

