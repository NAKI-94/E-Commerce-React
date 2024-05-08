import "./titulo.css"
import Diosasolo from "../../assets/img/Diosasolo.png"
import Diosa from "../../assets/img/Diosa.png"

import React from "react"
import { Link } from "react-router-dom"

export default function Titulo(){
return (<>
<header>

<div className="container" >
    <div className="logo">
    
       <img src={Diosasolo} alt=""></img> 
      
    </div>

    <ul className="menu">
    <li><Link to ="/">Inicio</Link></li>
    <li><Link to ="/Productos">Productos</Link></li>
    <li><a href="https://wa.me/+573188327717">Contacto</a></li>
    <li><a href="#!">Carrito</a></li>
   
    </ul>
</div>

</header>
</>)
}