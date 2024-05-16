import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    productos: [],
};

const carritoSlice =createSlice({
    initialState,
    name:"carrito",
    reducers:{
        agregarAlCarrito: (estadoActual,action)=>{
            const producto =action.payload;
            estadoActual.productos.push(producto)
        },
        
        eliminar: (state, action)=>{
            const id =action.payload;
            state.productos=state.productos.filter(producto=> producto.id !== id)

        }
    },


});
export const carritoReducer= carritoSlice.reducer;
export default carritoSlice.actions;