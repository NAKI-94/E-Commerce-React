
import all_product from '../../assets/productos/all_product'

import Titulo from '../../components/Titulo/Titulo';
import Product from '../Product';

const Productos = () => {
   const ProductoEncontrado =all_product.find(producto => producto.id)
   console.log(ProductoEncontrado);
 
  return (
    <div>
      <Titulo></Titulo>
   
    
      <div>
            <img className='imagen-producto' src={ProductoEncontrado.Image} ></img>
            <h3>{ProductoEncontrado.name}</h3>
            <p>$ {ProductoEncontrado.precio}</p>
            
            
      </div>      
    

   
  
  
  
  </div>
  )
  
}
 export default Productos;