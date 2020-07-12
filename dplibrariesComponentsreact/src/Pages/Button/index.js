import React from 'react'
import Main from '../main'
import Container from '../../components/Container'
import TitlePages from '../../components/TitlePages'
import { ButtonContainer, PreStyled } from './styled'
import { PrimaryButton,
     SecundaryButton,
     SuccessButton, 
     WarningButton, 
     DangerButton, 
     InfoButton,
     LightButton,
     DarkButton 
    } from '../../entry.js'

export default function ButtonPage() {
    return (
        <Main>
            <Container>
                <TitlePages>Botones </TitlePages>
                <p> Se usan estos estilos de botones personalizado por <b>DPLibraries</b> para los formularios, como para cuadro de dialogo, muchas cosas que usted desees usarlo. Usarlo como componentes independiente para react.js</p>
                <h3>Ejemplos de Botones para Componentes de React.js</h3>
                <p>Aquí veís varios botones predefindos, para el uso de componentes de react, cada uno para un uso semántico.</p>
                <ButtonContainer>
                    <PrimaryButton>Boton primario</PrimaryButton>
                    <SecundaryButton>Boton Secundario</SecundaryButton>
                    <SuccessButton>Botón de exito</SuccessButton>
                    <WarningButton>Boton Advertencia</WarningButton>
                    <DangerButton>Botón Peligro</DangerButton>
                    <InfoButton>Botón Información</InfoButton>
                    <LightButton>Botón ligero</LightButton>
                    <DarkButton>Botón oscuro</DarkButton>
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
            </Container>
        </Main>
    )
}
