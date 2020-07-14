import React from 'react'
import { bool, string } from 'prop-types'
import { ButtonLinkStyled, ButtonStyle } from './ButtonStyled'
import { func } from 'prop-types'

const Button = props => {
    const { children, href } = props
    const buttonProps = Object.assign({}, props)
    return href
        ? <ButtonLinkStyled href={href} {...buttonProps}>{children}</ButtonLinkStyled>
        : <ButtonStyle {...buttonProps}>{children}</ButtonStyle>

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

