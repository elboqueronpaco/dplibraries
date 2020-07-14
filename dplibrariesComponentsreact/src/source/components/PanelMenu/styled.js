import styled from '@emotion/styled'

export const PanelMenuStyled = styled.nav`
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--second-modal-color);
    visibility: ${({ open }) => open ? 'visible' : 'hidden'} ;
    opacity: ${({ open }) => open ? '1' : '0'};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'} 
`