import React from 'react'
import { bool, string } from 'prop-types'
import { func } from 'prop-types'
import { DangerButtonLinkStyle, DangerButtonStyle } from './styled'

const Button = props => {
    const { children, href } = props
    const buttonProps = Object.assign({}, props)
    return href
        ? <DangerButtonLinkStyle href={href} {...buttonProps}>{children}</DangerButtonLinkStyle>
        : <DangerButtonStyle{...buttonProps}>{children}</DangerButtonStyle>

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

