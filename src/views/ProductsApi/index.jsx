
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
		        <div class="btn"><a href="#">
              AGREGAR AL CARRITO
              
<svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="50" height="52"><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/><path d="M19.75,13.162A2.5,2.5,0,0,1,17.339,15H7.217a.329.329,0,0,1-.325-.3L6.036,8H10.5A1.5,1.5,0,0,0,12,6.5h0A1.5,1.5,0,0,0,10.5,5H5.653L5.391,2.939A3.327,3.327,0,0,0,2.087,0H1.5a1.5,1.5,0,0,0,0,3h.587a.329.329,0,0,1,.325.3l1.5,11.76A3.327,3.327,0,0,0,7.217,18H17.339a5.5,5.5,0,0,0,5.3-4.042l.016-.06A1.5,1.5,0,0,0,21.213,12h0a1.5,1.5,0,0,0-1.446,1.1Z"/><path d="M22.5,3H21V1.5a1.5,1.5,0,0,0-3,0V3H16.5a1.5,1.5,0,0,0,0,3H18V7.5a1.5,1.5,0,0,0,3,0V6h1.5a1.5,1.5,0,0,0,0-3Z"/></svg>

              </a></div>
            </div>
            </button>

            
            
      </div>      
    

   
  
  
  
  </div>
  )
  
}
 export default Producto;