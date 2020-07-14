import colors from '../../../colors'
import styled from '@emotion/styled'
import { ButtonStyle } from '../ButtonStyled'

export const WarningButtonLinkStyle = styled(ButtonStyle)`
    ${({ outline, disabled })=>`
        background-color: ${outline ? 'transparent': colors.warning.background};
        color: ${outline ? colors.warning.background : colors.color}
    `}
`
export const WarningButtonStyle = WarningButtonLinkStyle.withComponent('button')
