import colors from '../../../colors'
import styled from '@emotion/styled'
import { ButtonLinkStyled } from '../ButtonStyled'

export const DangerButtonLinkStyle = styled(ButtonLinkStyled)`
    ${({ outline, disabled })=>`
        background-color: ${outline ? 'transparent': colors.danger.background};
        color: ${outline ? colors.danger.background : colors.color}
    `}
`
export const DangerButtonStyle = DangerButtonLinkStyle.withComponent('button')
