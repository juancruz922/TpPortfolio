import React from 'react';

const Creacion = ({ creacion, screen = "Creaciones" }) => {
  return (
    <div className="card" style={styles.card}>
      <div className="card-body">
        <h5 className="card-title" style={styles.cardTitle}>
          {creacion.Titulo}
        </h5>
        {screen === "Home" ? "" : <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target={"#exampleModal" + creacion.Id}>Descubrir más</button>}
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: 500,
    maxHeight: 650,
    backgroundColor: '#ffcccb', 
    borderColor: '#ff6666', 
    borderRadius: '15px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  cardTitle: {
    color: '#333',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  starIcon: {
    color: '#ff6666', 
    marginLeft: '5px',
  },
};

export default Creacion;