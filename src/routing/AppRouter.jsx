import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from '../views/Product/index';
import Productos from '../views/ProductsApi/index';
import Home from '../views/home/index';

;

  export const AppRouter = () => {
  return (
   <BrowserRouter>   
    <Routes>
    <Route  exact path="/" element={<Home />} />
   <Route exact path="/productos" element={<Product />} />
        {/* <Route path="productos/:id" element={<Productos />} />
        <Route path="carrito" element={<Carrito />} />
 */}

    </Routes>
   </BrowserRouter>
  )
}
 export default AppRouter;