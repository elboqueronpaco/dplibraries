import React from 'react'
import Main from '../main'

import { ButtonContainer, PreStyled } from './styled'
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
    DarkButton } from '../../source/entry'


export default function ButtonPage() {
    return (
        <Main>
            <Container>
                <TitlePages>Botones </TitlePages>
                <p> Se usan estos estilos de botones personalizado por <b>DPLibraries</b> para los formularios, como para cuadro de dialogo, muchas cosas que usted desees usarlo. Usarlo como componentes independiente para react.js</p>
                <h3>Ejemplos de Botones para Componentes de React.js</h3>
                <p>Aquí veís varios botones predefindos, para el uso de componentes de react, cada uno para un uso semántico.</p>
                <ButtonContainer>
                    <Button type='button'>Botón Por defecto</Button>
                    <PrimaryButton type='button'>Botón Primario</PrimaryButton>
                    <SecundaryButton type='button'>Botón Secundario</SecundaryButton>
                    <DangerButton type='button'>Botón Peligro</DangerButton>
                    <WarningButton type='button'>Botón Advertencia</WarningButton>
                    <InfoButton type='button'>Botón Información</InfoButton>
                    <LightButton type='button'>Botón Ligero</LightButton>
                    <DarkButton type='button'>Botón Oscuro</DarkButton>
                </ButtonContainer>
                    <PreStyled>{`
                    <PrimaryButton> button </PrimaryButton>
                    <SecudaryButton> button </SecudaryButton>
                    <SuccessButton> button </SuccessButton>
                    <WarningButton> button </WarningButton>
                    <DangerButton> button </DangerButton>
                    <InfoButton> button </InfoButton>
                    <LightButton> button </LightButton>
                    <DarkButton> button </DarkButton><br/>
                    `}</PreStyled>
                <h3>Utilizar estos estilos de botones como enlances como <b>Link</b></h3>
                <p>También puedes utilizar estos componentes tan solo utilizando la propiede href se tranfromaran en etiquetas <b>a</b></p>
                <ButtonContainer>
                    <Button href='#'>Enlace Por defecto</Button>
                    <PrimaryButton href='#'>Enlace Primario</PrimaryButton>
                    <SecundaryButton href='#'>Enlace Secundario</SecundaryButton>
                    <DangerButton href='#'>Enlace Peligro</DangerButton>
                    <WarningButton href='#'>Enlace Advertencia</WarningButton>
                    <InfoButton href='#'>Enlace Información</InfoButton>
                    <LightButton href='#'>Enlace Ligero</LightButton>
                    <DarkButton href='#'>Enlace Oscuro</DarkButton>
                </ButtonContainer>
            </Container>
        </Main>
    )
}
