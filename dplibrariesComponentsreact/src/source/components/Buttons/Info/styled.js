import colors from '../../../colors'
import styled from '@emotion/styled'
import { ButtonLinkStyled } from '../ButtonStyled'

export const InfoButtonLinkStyle = styled(ButtonLinkStyled)`
    ${({ outline, disabled })=>`
        background-color: ${outline ? 'transparent': colors.info.background};
        color: ${outline ? colors.info.background : colors.color}
    `}
`
export const InfoButtonStyle = InfoButtonLinkStyle.withComponent('button')
