import React from "react";
import "./Registro.css";


const Registro = () => {
    return (
        <div className="form-container">
            <h2>Registro</h2>
            <form>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Teléfono" />
                <input type="password" placeholder="Contraseña" />
                <input type="password" placeholder="Confirmar contraseña" />
                <button type="submit">Registrarse</button>
            </form>

        </div>
    );

};
export default Registro;