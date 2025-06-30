import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useNavigate, Link } from 'react-router-dom';

const TourCreate = () => {
  const [titulo, setTitulo] = useState('');
  const [fecha, setFecha] = useState('');
  const [zona, setZona] = useState('');
  const [guia, setGuia] = useState('');
  const [zonas, setZonas] = useState([]);
  const [guias, setGuias] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    api.get('zonas/').then(res => setZonas(res.data));
    api.get('guias/').then(res => setGuias(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('tours/', { titulo, fecha, zona, guia })
      .then(() => {
        alert("Tour creado con éxito");
        navigate('/tours');
      })
      .catch(error => {
        console.error("Error al crear tour:", error.response?.data);
        alert("Error al crear tour. Verifica los campos.");
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Crear Tour</h2>

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
            {zonas.map(z => (
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
            {guias.map(g => (
              <option key={g.id} value={g.id}>{g.nombre}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-success">Guardar Tour</button>
      </form>
    </div>
  );
};

export default TourCreate;