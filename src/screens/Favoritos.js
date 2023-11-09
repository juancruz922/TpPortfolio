import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Creacion from '../components/Creacion';
import FavoritoContext from "../context/favoritoContext";

const Favoritos = () => {
  const [creaciones, setCreaciones] = useState([]);
  const favorito = useContext(FavoritoContext);

  const getCreaciones = () => axios.get('http://localhost:3000/creaciones.json').then(res => setCreaciones(res.data)).catch(error => console.log(error));

  useEffect(() => {
    getCreaciones();
  }, []);

  return (
    <div className="container" style={styles.container}>
      <div className="row justify-content-center" style={styles.row}>
        {creaciones.map(creacion => favorito.favorito.find((c) => c.Id === creacion.Id) ? (
          <div key={creacion.Id} className="col-4" style={styles.col}>
            <Creacion creacion={creacion} />
          </div>
        ) : "")}
      </div>
    </div>
  );
}

export default Favoritos;

const styles = {
  container: {
    marginLeft: '10%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '60vh',
    padding: '20px',
  },
  row: {
    width: '120%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  col: {
    margin: '3%',
    maxWidth: '25%',
  },
};
