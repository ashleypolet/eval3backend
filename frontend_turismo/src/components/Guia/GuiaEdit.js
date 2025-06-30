import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useNavigate, useParams, Link } from 'react-router-dom';

const GuiaEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [idioma, setIdioma] = useState('');

  useEffect(() => {
    api.get(`guias/${id}/`)
      .then(response => {
        setNombre(response.data.nombre);
        setIdioma(response.data.idioma);
      })
      .catch(error => {
        console.error("Error al cargar guía:", error);
        alert("No se pudo cargar la guía");
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`guias/${id}/`, { nombre, idioma })
      .then(() => {
        alert("Guía actualizada");
        navigate('/guias');
      })
      .catch(error => {
        console.error("Error al actualizar guía:", error);
        alert("No se pudo actualizar");
      });
  };

  const handleDelete = () => {
    if (window.confirm("¿Deseas eliminar esta guía?")) {
      api.delete(`guias/${id}/`)
        .then(() => {
          alert("Guía eliminada");
          navigate('/guias');
        })
        .catch(error => {
          console.error("Error al eliminar guía:", error);
          alert("No se pudo eliminar");
        });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Editar Guía</h2>

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

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Guardar cambios</button>
          <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
        </div>
      </form>
    </div>
  );
};

export default GuiaEdit;