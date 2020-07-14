import colors from '../../../colors'
import styled from '@emotion/styled'
import { ButtonLinkStyled } from '../ButtonStyled'

export const SecundaryButtonLinkStyle = styled(ButtonLinkStyled)`
    ${({ outline, disabled })=>`
        background-color: ${outline ? 'transparent': colors.secundary.background};
        color: ${outline ? colors.secundary.background : colors.color}
    `}
`
export const SecundaryButtonStyle = SecundaryButtonLinkStyle.withComponent('button')
