import React from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Product from '../views/Product/index';
import Productos from '../views/ProductsApi/index';
import Home from '../views/home/index';
import Carrito from '../views/Carrito/carrito';

;

  export const AppRouter = () => {
  return (
   <BrowserRouter>   
    <Routes>
    <Route  exact path="/" element={<Home />} />
    <Route exact path="/productos" element={<Product />} />
    <Route path="productos/:id" element={<Productos />} />
    <Route  path="carrito" element={<Carrito />} />


    </Routes>
    <Link to="/carrito">Ver Carrito</Link> 

   </BrowserRouter>
  );
};
 export default AppRouter;