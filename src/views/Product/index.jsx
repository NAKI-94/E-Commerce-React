import React from 'react'
import { Link } from 'react-router-dom'
import Titulo from '../../components/Titulo/Titulo';
import all_product from '../../assets/productos/all_product'
import "./index.css"



 export const Products = () => {



  console.log(all_product);
  return (
    <div  >
      <Titulo></Titulo>
      <h1>LISTA DE PRODUCTOS</h1>
      <ul className='lista-productos'>
          
          {all_product.map((Products)=>{
            return (

            <li className='tarjeta-producto' key ={Products.id.toString}>
            
            <img className='imagen-producto' src={Products.Image} ></img>
            <h3>{Products.name}</h3>
            <p>$ {Products.precio}</p>
            <Link to={`/productos/${Products.id}`}>Ver producto</Link>
            </li>

            )

          })}
         
        
        
        


      </ul>
      
    
    </div>
  )
}

export default Products;
