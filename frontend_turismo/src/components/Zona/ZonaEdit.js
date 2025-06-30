import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useNavigate, useParams, Link } from 'react-router-dom';

const ZonaEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    api.get(`zonas/${id}/`)
      .then(response => {
        setNombre(response.data.nombre);
        setDescripcion(response.data.descripcion);
      })
      .catch(error => {
        console.error("Error al cargar zona:", error);
        alert("No se pudo cargar la zona");
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`zonas/${id}/`, { nombre, descripcion })
      .then(() => {
        alert("Zona actualizada");
        navigate('/zonas');
      })
      .catch(error => {
        console.error("Error al actualizar zona:", error);
        alert("No se pudo actualizar");
      });
  };

  const handleDelete = () => {
    if (window.confirm("¿Estás segura/o de eliminar esta zona?")) {
      api.delete(`zonas/${id}/`)
        .then(() => {
          alert("Zona eliminada");
          navigate('/zonas');
        })
        .catch(error => {
          console.error("Error al eliminar zona:", error);
          alert("No se pudo eliminar");
        });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Editar Zona</h2>

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

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Guardar cambios</button>
          <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
        </div>
      </form>
    </div>
  );
};

export default ZonaEdit;