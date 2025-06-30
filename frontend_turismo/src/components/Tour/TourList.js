import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const TourList = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    api.get('tours/')
      .then((response) => setTours(response.data))
      .catch((error) => console.error('Error al cargar tours:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Lista de Tours</h2>

      <Link to="/tours/crear" className="btn btn-success mb-4">
        Agregar Tour
      </Link>

      {tours.length === 0 ? (
        <p className="text-muted">No hay tours registrados.</p>
      ) : (
        <ul className="list-group">
          {tours.map((tour) => (
            <li key={tour.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{tour.titulo}</strong><br />
                Fecha: {tour.fecha}<br />
                Zona ID: {tour.zona} | Guía ID: {tour.guia}
              </div>
              <Link to={`/tours/editar/${tour.id}`} className="btn btn-outline-primary btn-sm">
                Editar
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TourList;