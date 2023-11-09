import React from 'react';

const Creacion = ({ creacion, screen = "Creaciones" }) => {
  return (
    <div className="card" style={styles.card}>
     
      <div className="card-body">
        <h5 className="card-title" style={styles.cardTitle}>
          {creacion.Titulo}{" "}
          
        </h5>
        {screen === "Home" ? "" : <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#exampleModal" + creacion.Id}>Ver más</button>}
      </div>
    </div>
  );
};

export default Creacion;

const styles = {
  card: {
    width: 500,
    maxHeight: 400,
    borderColor: 'green',
  },
  cardImage: {
    maxHeight: 200,
    width: '80%',
    margin: '3%',
    alignSelf: 'center',
  },
  cardTitle: {
    color: '#333',
    fontSize: '1.25rem',
    display: 'flex',
    alignItems: 'center',
  },
  starIcon: {
    color: 'green',
    marginLeft: '5px',
  },
};
