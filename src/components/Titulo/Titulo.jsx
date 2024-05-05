import "./titulo.css"
import Diosasolo from "../../assets/img/Diosasolo.png"
import Diosa from "../../assets/img/Diosa.png"

import React from "react"

export default function Titulo(){
return (<>
<header>

<div className="container" >
    <div className="logo">
    
       <img src={Diosasolo} alt=""></img> 
      
    </div>

    <ul className="menu">
    <li><a href="#!">Inicio</a></li>
    <li><a href="#!">Acerca</a></li>
    <li><a href="https://wa.me/+573188327717">Contacto</a></li>
    <li><a href="#!">Carrito</a></li>
   
    </ul>
</div>

</header>
</>)
}