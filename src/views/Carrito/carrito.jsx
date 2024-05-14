import React from 'react'
import { useSelector } from 'react-redux';
import Titulo from '../../components/Titulo/Titulo';
import all_product from '../../assets/productos/all_product';
import { useParams } from 'react-router-dom';

const renderizarProductos = (productos) => {
 
  return productos.map((producto) => (
    <li key={producto.id.toString()}>
      <img className='imagen-producto' src={producto.Image} ></img>
            <h3>{producto.name}</h3>
            <p>$ {producto.precio}</p>
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