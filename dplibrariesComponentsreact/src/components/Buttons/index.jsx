import React from 'react'
import { Link, Button } from './ButtonStyled' 

export default function ButtonComponent({children, href, type, backgroudColor, textColor}) {
return href
    ? <Link href={href} backgroudColor={backgroudColor} textColor={textColor}>{children}</Link>
    : <Button type={type} backgroudColor={backgroudColor} textColor={textColor}>{children}</Button>
}

export  function PrimaryButtonLink({href, children}) {
    return <Button href={href} backgroudColor='primary' textColor='white'>{children}</Button>
    }
export function PrimaryButton({ children, type }) {
    return <Button type={type} backgroudColor='primary' textColor='white'>{children}</Button>
}

export function SecundaryButtonLink({ href, children}) {
    return <Button href={href} backgroudColor='secundary' textColor='white'>{children}</Button>
}

export function SecundaryButton({ type, children}) {
    return <Button type={type} backgroudColor='secundary' textColor='white'>{ children}</Button>
}

export function SuccessButtonLink({ href, children}) {
    return <Button href={href} backgroudColor='success' textColor='white'>{children}</Button>
}

export function SuccessButton({ type, children}) {
    return <Button type={type} backgroudColor='success' textColor='white'>{ children}</Button>
}
export function WarningButtonLink({ href, children}) {
    return <Button href={href} backgroudColor='warning' textColor='white'>{children}</Button>
}

export function WarningButton({ type, children}) {
    return <Button type={type} backgroudColor='warning' textColor='white'>{ children}</Button>
}
export function DangerButtonLink({ href, children}) {
    return <Button href={href} backgroudColor='danger' textColor='white'>{children}</Button>
}

export function DangerButton({ type, children}) {
    return <Button type={type} backgroudColor='danger' textColor='white'>{ children}</Button>
}
export function InfoButtonLink({ href, children}) {
    return <Button href={href} backgroudColor='info' textColor='white'>{children}</Button>
}

export function InfoButton({ type, children}) {
    return <Button type={type} backgroudColor='info' textColor='white'>{ children}</Button>
}
export function LightButtonLink({ href, children}) {
    return <Button href={href} backgroudColor='light' textColor='text'>{children}</Button>
}

export function LightButton({ type, children}) {
    return <Button type={type} backgroudColor='light' textColor='text'>{ children}</Button>
}
export function DarkButtonLink({ href, children}) {
    return <Button href={href} backgroudColor='text' textColor='white'>{children}</Button>
}

export function DarkButton({ type, children}) {
    return <Button type={type} backgroudColor='text' textColor='white'>{ children}</Button>
}