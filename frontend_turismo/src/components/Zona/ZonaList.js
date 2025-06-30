import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const ZonaList = () => {
  const [zonas, setZonas] = useState([]);

  useEffect(() => {
    api.get('zonas/')
      .then(response => setZonas(response.data))
      .catch(error => console.error("Error al cargar zonas:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Zonas Turísticas</h2>

      <Link to="/zonas/crear" className="btn btn-success mb-4">
        Crear nueva zona
      </Link>

      {zonas.length === 0 ? (
        <p className="text-muted">No hay zonas registradas.</p>
      ) : (
        <ul className="list-group">
          {zonas.map(zona => (
            <li key={zona.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{zona.nombre}</strong><br />
                <span>{zona.descripcion}</span>
              </div>
              <Link to={`/zonas/editar/${zona.id}`} className="btn btn-outline-primary btn-sm">
                Editar
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ZonaList;