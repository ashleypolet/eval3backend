import React, { useState } from 'react';
import api from '../../services/api';
import { useNavigate, Link } from 'react-router-dom';

const GuiaCreate = () => {
  const [nombre, setNombre] = useState('');
  const [idioma, setIdioma] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('guias/', { nombre, idioma })
      .then(() => {
        alert("Guía creado con éxito");
        navigate('/guias');
      })
      .catch((error) => {
        console.error("Error al crear guía:", error.response?.data);
        alert("Error al crear guía");
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Crear Guía</h2>

      <Link to="/guias" className="btn btn-secondary mb-3">← Volver a la lista</Link>

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
          <label className="form-label">Idioma</label>
          <input
            type="text"
            className="form-control"
            value={idioma}
            onChange={(e) => setIdioma(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">Guardar</button>
      </form>
    </div>
  );
};

export default GuiaCreate;