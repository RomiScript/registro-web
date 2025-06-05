import { useState } from 'react';
import './Registro.css';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nombre,
      apellido,
      email,
      telefono,
      password,
      confirmarPassword,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>

      <label>Nombre</label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <label>Apellido</label>
      <input
        type="text"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Teléfono</label>
      <input
        type="tel"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <label>Contraseña</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label>Confirmar contraseña</label>
      <input
        type="password"
        value={confirmarPassword}
        onChange={(e) => setConfirmarPassword(e.target.value)}
      />

      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Registro;
