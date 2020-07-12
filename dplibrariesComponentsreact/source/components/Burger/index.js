import React from 'react'
import { BurgerStyled } from './styled'


export default function Burger({backgroudColor, open, setOpen}) {
    return (
        <BurgerStyled open={open} onClick={() => setOpen(!open)}>
           <div backgroudColor={backgroudColor}></div> 
           <div backgroudColor={backgroudColor}></div> 
           <div backgroudColor={backgroudColor}></div> 
        </BurgerStyled>
    )
}
