import colors from '../../../colors'
import styled from '@emotion/styled'
import { ButtonLinkStyled } from '../ButtonStyled'

export const DarkButtonLinkStyle = styled(ButtonLinkStyled)`
    ${({ outline, disabled })=>`
        background-color: ${outline ? 'transparent': colors.dark.background};
        color: ${outline ? colors.dark.background : colors.color}
    `}
`
export const DarkButtonStyle = DarkButtonLinkStyle.withComponent('button')
