import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../../services/api';

const TourEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [fecha, setFecha] = useState('');
  const [zona, setZona] = useState('');
  const [guia, setGuia] = useState('');
  const [zonas, setZonas] = useState([]);
  const [guias, setGuias] = useState([]);

  useEffect(() => {
    api.get(`tours/${id}/`)
      .then((res) => {
        setTitulo(res.data.titulo);
        setFecha(res.data.fecha);
        setZona(res.data.zona);
        setGuia(res.data.guia);
      })
      .catch((error) => {
        console.error("Error al cargar tour:", error.response?.data);
        alert("No se pudo cargar el tour.");
      });

    api.get('zonas/').then((res) => setZonas(res.data));
    api.get('guias/').then((res) => setGuias(res.data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`tours/${id}/`, { titulo, fecha, zona, guia })
      .then(() => {
        alert("Tour actualizado con éxito");
        navigate('/tours');
      })
      .catch((error) => {
        console.error("Error al actualizar tour:", error.response?.data);
        alert("Error al actualizar el tour");
      });
  };

  const handleDelete = () => {
    const confirmar = window.confirm("¿Eliminar este tour?");
    if (confirmar) {
      api.delete(`tours/${id}/`)
        .then(() => {
          alert("Tour eliminado");
          navigate('/tours');
        })
        .catch((error) => {
          console.error("Error al eliminar tour:", error.response?.data);
          alert("No se pudo eliminar el tour");
        });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Editar Tour</h2>

      <Link to="/tours" className="btn btn-secondary mb-3">← Volver a la lista</Link>

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Zona Turística</label>
          <select
            className="form-select"
            value={zona}
            onChange={(e) => setZona(e.target.value)}
            required
          >
            <option value="">Seleccione una zona</option>
            {zonas.map((z) => (
              <option key={z.id} value={z.id}>{z.nombre}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Guía</label>
          <select
            className="form-select"
            value={guia}
            onChange={(e) => setGuia(e.target.value)}
            required
          >
            <option value="">Seleccione un guía</option>
            {guias.map((g) => (
              <option key={g.id} value={g.id}>{g.nombre}</option>
            ))}
          </select>
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Guardar cambios</button>
          <button type="button" className="btn btn-danger" onClick={handleDelete}>
            Eliminar
          </button>
        </div>
      </form>
    </div>
  );
};

export default TourEdit;