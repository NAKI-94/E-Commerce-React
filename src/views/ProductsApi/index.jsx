
import { useParams } from 'react-router-dom';
import all_product from '../../assets/productos/all_product'
import "./index.css"
import Titulo from '../../components/Titulo/Titulo';
import { useDispatch } from 'react-redux';
import accionesDelCarrito from "../../slicers/carrito"

const Producto = () => {
  const {id} =useParams()

  const dipatch = useDispatch();
   
   const ProductoEncontrado =all_product.find(producto => producto.id == id)
   console.log(ProductoEncontrado);



   const handleAgregarAlCarrito = () => {
    console.log("Agregando al carrito", ProductoEncontrado);
    dipatch(accionesDelCarrito.agregarAlCarrito(ProductoEncontrado));
  };
 
  return (
    <div>
      <Titulo></Titulo>
   
      <h1>{ProductoEncontrado.name}</h1>
      <div className='tarjeta-producto2'>
            <img className='imagen-producto' src={ProductoEncontrado.Image} ></img>
            <p>{ProductoEncontrado.descripcion}</p>
            <p>$ {ProductoEncontrado.precio}</p>

            <button className="btn-agrecar"  onClick={() => handleAgregarAlCarrito()}>
              <div class="container-agrecar">
		        <div class="btn"><a href="#">AGREGAR AL CARRITO</a></div>
            </div>
            </button>

            
            
      </div>      
    

   
  
  
  
  </div>
  )
  
}
 export default Producto;