import colors from '../../../colors'
import styled from '@emotion/styled'
import { ButtonLinkStyled } from '../ButtonStyled'

export const PrimaryButtonLinkStyle = styled(ButtonLinkStyled)`
    ${({ outline, disabled })=>`
        background-color: ${outline ? 'transparent': colors.primary.background};
        color: ${outline ? colors.primary.background : colors.color}
    `}
`
export const PrimaryButtonStyle = PrimaryButtonLinkStyle.withComponent('button')
