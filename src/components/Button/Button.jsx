import { Link } from "react-router-dom"
import AppRouter from "../../routing/AppRouter"
import Productos from "../../views/ProductsApi"
import React from 'react'
import "./Button.css"

export default function Button (){
    return (
     <> 
     <Link to="/productos">
    <button className="button">Ver Productos

    </button>
    </Link>
    </>  
    )
};