import React, { useState} from 'react'
import ReactDOM from 'react-dom'
import { Header, Logo, Burger, PanelMenu, Menu, ItemMenu, LinkMenu} from '../../entry'

const HeaderLayout = () => {
    const [open, setOpen] = useState(false)
    return ReactDOM.createPortal(
        <Header>
        <Logo><h1>logo</h1></Logo>
        <Burger open={open} setOpen={setOpen} />
        <PanelMenu open={open} setOpen={setOpen}>
          <Menu>
            <ItemMenu>
            <LinkMenu href='/' open={open} setOpen={setOpen}>Inicio</LinkMenu>
            <LinkMenu href='/buttons' open={open} setOpen={setOpen}>Botones</LinkMenu>
            </ItemMenu>
          </Menu>
        </PanelMenu>
      </Header>,
      document.getElementById('header')
    )
}

export default HeaderLayout