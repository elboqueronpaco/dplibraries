

# DPLibrariesReact

Es un Librerias para componentes de React

## instalación de la apilicación


```
    npm i dplibrariesreact
```

### Button's type

``` js
    import React from 'react'
    import { PrimaryButton,
     SecundaryButton,
     SuccessButton, 
     WarningButton, 
     DangerButton, 
     InfoButton,
     LightButton,
     DarkButton 
    } from 'dplibrariesreact'
    export default function ButtonPage() {
    return (
        <Main>
            <PrimaryButton>Boton primario</PrimaryButton>
            <SecundaryButton>Boton Secundario</SecundaryButton>
            <SuccessButton>Botón de exito</SuccessButton>
            <WarningButton>Boton Advertencia</WarningButton>
            <DangerButton>Botón Peligro</DangerButton>
            <InfoButton>Botón Información</InfoButton>
            <LightButton>Botón ligero</LightButton>
            <DarkButton>Botón oscuro</DarkButton>
        </>
    )
}
```
### Headar

Utilizamos useState open para abrir panel de menu  hacer la animación de burger botón transformadolo en  ` X` ,

``` js
import React, { useState} from 'react'
import { Header, Logo, Burger, PanelMenu, Menu, ItemMenu, LinkMenu} from 'dplibrariesreact'

export default  HeaderLayout = () => {
    const [open, setOpen] = useState(false)
    return (
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
      </Header>
    )
}

export default HeaderLayout
```
