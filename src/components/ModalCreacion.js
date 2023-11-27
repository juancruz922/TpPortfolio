import React, { useContext, useState } from 'react';
import FavoritoContext from '../context/favoritoContext';
import Login from './Contacto';

const ModalCreacion = ({ creacion }) => {
  const favorito = useContext(FavoritoContext);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleAgregarFavoritos = () => {
    if (isUserLoggedIn) {
      favorito.favorito.find((c) => c.Id === creacion.Id)
        ? favorito.setFavorito(favorito.favorito.filter((c) => c !== creacion))
        : favorito.setFavorito([...favorito.favorito, creacion]);
    } else {
      alert('Debes iniciar sesión para agregar a favoritos.');
    }
  };

  return (
    <div className="modal fade" id={"exampleModal" + creacion.Id} tabIndex="-1" aria-labelledby={"exampleModalLabel" + creacion.Id} aria-hidden="true" data-backdrop="static">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={styles.modalContent}>
          <div className="modal-header">
            <h1 className="modal-title fs-4" id={"exampleModalLabel" + creacion.Id}>{creacion.Titulo}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p className="text-primary">{creacion.FechaInicio} - {creacion.FechaFin}</p>
            <img src={creacion.Imagen} alt={creacion.Titulo} style={{ maxWidth: '100%', maxHeight: '300px', height: 'auto' }} />
            <p>{creacion.Descripcion}</p>
          </div>
          <div className="modal-footer">
            {favorito.favorito.find((c) => c.Id === creacion.Id) ?
              <button type="button" className="btn btn-outline-danger" onClick={handleAgregarFavoritos}>Quitar de favoritos</button> :
              <button type="button" className="btn btn-outline-success" onClick={handleAgregarFavoritos}>Agregar a favoritos</button>}
               <Login onLogin={() => setIsUserLoggedIn(true)} />
          </div>
        </div>
      </div>
      {/* Renderiza el componente Login en el modal y pasa la función onLogin */}
      <Login onLogin={() => setIsUserLoggedIn(true)} />
    </div>
  );
};

const styles = {
  modalContent: {
    backgroundColor: '#f0f8ff',
    borderRadius: '15px',
    boxShadow: '0',
  },
};

export default ModalCreacion;
