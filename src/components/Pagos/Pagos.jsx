
import React, { useState } from "react";
import { useSelector} from "react-redux";
import Titulo from '../Titulo/Titulo';
import "./Pago.css"

export const Pagos = () => {
    const productosAgregados = useSelector(
        (estadoActualDelApp) => estadoActualDelApp.carrito.productos
      );
      const total = productosAgregados.reduce(
        (total, producto) => total + producto.precio,
        0
      );
    
      const [mostrar, setMostrar] = useState(false);
    
      const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        direccion: "",
        tarjeta: "",
        vencimiento: "",
        cvv: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log("Formulario enviado:", formData);
    
        alert("Pago realizado con éxito");
        setTimeout(() => {
          // setFormData({
          //     nombre: '',
          //     email: '',
          //     direccion: '',
          //     tarjeta: '',
          //     vencimiento: '',
          //     cvv: ''
    
          //   } );
    
          // history.push("/home");
          // window.history.back();
          window.location.reload();
        }, 5000);
      };
    
      return (
        <>
          <Titulo></Titulo>
          <div className="form-container">
            <h2 style={{textAlign:"center"}}>Formulario de Pago</h2>
            <form onSubmit={handleSubmit} className="payment-form">
              <div className="form-group">
                <label>Nombre Completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Dirección</label>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Número de Tarjeta</label>
                <input
                  type="text"
                  name="tarjeta"
                  value={formData.tarjeta}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Fecha de Vencimiento</label>
                <input
                  type="date"
                  name="vencimiento"
                  value={formData.vencimiento}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Valor a Pagar</label>
                <input type="text" value={`$${total.toFixed(2)}`} readOnly />
              </div>
              <button
                onClick={() => setMostrar(!mostrar)}
                type="submit"
                className="submit-button"
              >
                Pagar
              </button>
            </form>
    
            {mostrar && (
              <p>
                Name: {formData.nombre}
                <br></br>
                Email: {formData.email}
                <br></br>
                Dirección: {formData.direccion}
                <br></br>
                Tarjeta: {formData.tarjeta}
                <br></br>
                Fecha Vencimiento: {formData.vencimiento}
                <br></br>
                CVV: {formData.cvv}
                <br></br>
                Valor Apagar: {`$${total.toFixed(2)}`}
              </p>
            )}
          </div>
        </>
      );
}
export default Pagos;