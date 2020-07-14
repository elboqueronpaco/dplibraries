

# DPLibrariesReact

Es un Librerias para componentes de React

## instalación de la apilicación


```
    npm i dplibrariesreact
```

### Button's type

Puedes utilizar estos componentes como `button o Link(a)` solamente utilizando `href`.

``` js
    import React from 'react'
    import { 
    Button, 
    Container, 
    TitlePages, 
    PrimaryButton, 
    SecundaryButton, 
    DangerButton, 
    WarningButton, 
    InfoButton, 
    LightButton, 
    DarkButton } from 'dplibrariesreact'
    export default function ButtonPage() {
    return (
        <Main>
            <Button type='button'>Botón Por defecto</Button>
            <PrimaryButton type='button'>Botón Primario</PrimaryButton>
            <SecundaryButton type='button'>Botón Secundario</SecundaryButton>
            <DangerButton type='button'>Botón Peligro</DangerButton>
            <WarningButton type='button'>Botón Advertencia</WarningButton>
            <InfoButton type='button'>Botón Información</InfoButton>
            <LightButton type='button'>Botón Ligero</LightButton>
            <DarkButton type='button'>Botón Oscuro</DarkButton>
            <Button href='#'>Enlace Por defecto</Button>
            <PrimaryButton href='#'>Enlace Primario</PrimaryButton>
            <SecundaryButton href='#'>Enlace Secundario</SecundaryButton>
            <DangerButton href='#'>Enlace Peligro</DangerButton>
            <WarningButton href='#'>Enlace Advertencia</WarningButton>
            <InfoButton href='#'>Enlace Información</InfoButton>
            <LightButton href='#'>Enlace Ligero</LightButton>
            <DarkButton href='#'>Enlace Oscuro</DarkButton>
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
