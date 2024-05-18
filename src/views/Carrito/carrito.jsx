import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Titulo from '../../components/Titulo/Titulo';
import accionesDelCarrito from '../../slicers/carrito'
import "./carrito.css"
import { Link } from 'react-router-dom';

const renderizarProductos = (productos, handleEliminar) => {



  return productos.map((producto) => (
    <li className='tarjeta-producto3' key={producto.id.toString()}>
      <img className='imagen-producto' src={producto.Image} ></img>
            <h3>{producto.name}</h3>
            <p>$ {producto.precio}</p>
            <button className="btn-carrito"  onClick={() => handleEliminar(producto.id)}>
              <div class="container-carrito">
		        <div class="btn"><a href="#">ELIMINAR</a></div>
            </div>
            </button>
    </li>
  ));
};
const sumarPrecios = (productos) => {
  return productos.reduce(
    (total, producto) => total + producto.precio,
    0
  );
};

const Carrito = () => {
  const productosAgregados = useSelector((estadoActualDelApp) => {
    console.log(estadoActualDelApp.carrito.productos);
    return estadoActualDelApp.carrito.productos;
  });
  const dispatch = useDispatch();

  const handleEliminar = (productoId) => {
    dispatch(accionesDelCarrito.eliminar(productoId));
  };
  const total=sumarPrecios(productosAgregados);

  console.log("AGREGADOS", productosAgregados);
  
  return (
    <div>
      <Titulo></Titulo>
      <h1>Carrito de compras</h1>
      <ul>{renderizarProductos(productosAgregados,handleEliminar)}</ul>
      <p className="valor-a-pagar">Valor a pagar: ${total.toFixed(2)}</p>
      <Link to="/pagos">Pagar</Link>
    </div>
    
  );
};

export default Carrito;