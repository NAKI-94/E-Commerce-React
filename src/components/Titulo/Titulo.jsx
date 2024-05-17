import "./titulo.css"
import Diosasolo from "../../assets/img/Diosasolo.png"

import React from "react"
import { Link } from "react-router-dom"

export default function Titulo(){
return (<>
<header>

<div className="container" >
    <div className="logo">
    
       <img className="logo1" src={Diosasolo} alt=""></img> 
      
    </div>

    <ul className="menu">
    <li><Link to ="/">Inicio</Link></li>
    <li><Link to ="/Productos">Productos</Link></li>
    <li><Link to ="/carrito">Carrito</Link></li>
    <li><Link to ="https://wa.me/+573188327717">Contacto</Link></li>
    <li><Link to ="/formulario">Login</Link></li>
    
   
    </ul>
</div>

</header>
</>)
};