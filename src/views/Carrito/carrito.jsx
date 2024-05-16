import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Titulo from '../../components/Titulo/Titulo';
import accionesDelCarrito from '../../slicers/carrito'
import "./carrito.css"

const renderizarProductos = (productos) => {



  return productos.map((producto) => (
    <li className='tarjeta-producto3' key={producto.id.toString()}>
      <img className='imagen-producto' src={producto.Image} ></img>
            <h3>{producto.name}</h3>
            <p>$ {producto.precio}</p>
            <button className="btn-carrito"  onClick={() => handleEliminar()}>
              <div class="container-carrito">
		        <div class="btn"><a href="#">ELIMINAR</a></div>
            </div>
            </button>
    </li>
  ));
};

const Carrito = () => {
  const productosAgregados = useSelector((estadoActualDelApp) => {
    console.log(estadoActualDelApp.carrito.productos);
    return estadoActualDelApp.carrito.productos;
  });


  console.log("AGREGADOS", productosAgregados);
  
  return (
    <div>
      <Titulo></Titulo>
      <h1>Carrito de compras</h1>
      <ul>{renderizarProductos(productosAgregados)}</ul>
      
    </div>
    
  );
};

export default Carrito;