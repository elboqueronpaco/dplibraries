import colors from '../../../colors'
import styled from '@emotion/styled'
import { ButtonLinkStyled } from '../ButtonStyled'

export const LightButtonLinkStyle = styled(ButtonLinkStyled)`
    ${({ outline, disabled })=>`
        background-color: ${outline ? 'transparent': colors.light.background};
        color: ${outline ? colors.light.background : colors.light.color}
    `}
`
export const LightButtonStyle = LightButtonLinkStyle.withComponent('button')
