
import { useParams } from 'react-router-dom';
import all_product from '../../assets/productos/all_product'
import "./index.css"

import Titulo from '../../components/Titulo/Titulo';

const Producto = () => {
  const {id} =useParams()
   
   const ProductoEncontrado =all_product.find(producto => producto.id == id)
   console.log(ProductoEncontrado);
 
  return (
    <div>
      <Titulo></Titulo>
   
      <h1>{ProductoEncontrado.name}</h1>
      <div className='tarjeta-producto2'>
            <img className='imagen-producto' src={ProductoEncontrado.Image} ></img>
            <p>{ProductoEncontrado.descripcion}</p>
            <p>$ {ProductoEncontrado.precio}</p>
            
            
      </div>      
    

   
  
  
  
  </div>
  )
  
}
 export default Producto;