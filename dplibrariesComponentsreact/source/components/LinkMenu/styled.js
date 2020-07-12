import styled from '@emotion/styled'
import { Link  } from 'wouter'

export const LinkMenuStyled = styled(Link)`
    text-decoration: none;
    color: var(--white-color);
    display: flex;
    padding: 1rem;
    :hover{
        background-color: var(--main-modal-color);
    }
`