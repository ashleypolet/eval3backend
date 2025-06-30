import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const GuiaList = () => {
  const [guias, setGuias] = useState([]);

  useEffect(() => {
    api.get('guias/')
      .then(response => setGuias(response.data))
      .catch(error => console.error("Error al cargar guías:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Guías Turísticos</h2>

      <Link to="/guias/crear" className="btn btn-success mb-4">
        Agregar Guía
      </Link>

      {guias.length === 0 ? (
        <p className="text-muted">No hay guías registrados.</p>
      ) : (
        <ul className="list-group">
          {guias.map(guia => (
            <li key={guia.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{guia.nombre}</strong><br />
                Idioma: {guia.idioma}
              </div>
              <Link to={`/guias/editar/${guia.id}`} className="btn btn-outline-primary btn-sm">
                Editar
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GuiaList;