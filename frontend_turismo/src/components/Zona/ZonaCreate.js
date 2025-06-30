import React, { useState } from 'react';
import api from '../../services/api';
import { useNavigate, Link } from 'react-router-dom';

const ZonaCreate = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('zonas/', { nombre, descripcion })
      .then(() => {
        alert("Zona creada con éxito");
        navigate('/zonas');
      })
      .catch((error) => {
        console.error("Error al crear zona:", error.response?.data);
        alert("Error al crear zona");
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Crear Zona Turística</h2>

      <Link to="/zonas" className="btn btn-secondary mb-3">← Volver a la lista</Link>

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">Guardar</button>
      </form>
    </div>
  );
};

export default ZonaCreate;