import React from 'react'
import { Link } from 'react-router-dom'
import Titulo from '../../components/Titulo/Titulo';
import all_product from '../../assets/productos/all_product'
import "./index.css"



 export const Product = () => {



  console.log(all_product);
  return (
    <div  >
      <Titulo></Titulo>
      <h1>LISTA DE PRODUCTOS</h1>
      <ul className='lista-productos'>
          
          {all_product.map((product)=>{
            return (

            <li className='tarjeta-producto' key ={product.id}>
            
            <img className='imagen-producto' src={product.Image} ></img>
            <h3>{product.name}</h3>
            <p>$ {product.precio}</p>
            <Link to={`/productos/${product.id}`}>Ver producto</Link>
            </li>

            )

          })}
         
        
        
        


      </ul>
      
    
    </div>
  )
}

export default Product;
