import React, { useState, useEffect } from 'react';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setLoggedIn(true);
      setUserName(storedUserName);
    }
  }, []); 

  const handleLogin = (e) => {
    e.preventDefault();
    const enteredUserName = e.target.elements.userName.value;

    setLoggedIn(true);
    setUserName(enteredUserName);

    localStorage.setItem('userName', enteredUserName);
  };

  const handleLogout = () => {
    
    setLoggedIn(false);
    setUserName('');
    localStorage.removeItem('userName');
  };

  return (
    <div className="login-form" style={styles.loginForm}>
      {loggedIn ? (
        <div style={styles.welcomeMessage}>
          <h2>Bienvenido, {userName}!</h2>
          <button onClick={handleLogout} className="btn btn-danger" style={styles.button}>
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2 style={styles.heading}>Iniciar Sesión</h2>
          <div className="form-group" style={styles.formGroup}>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Nombre de Usuario"
              style={styles.input}
            />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              style={styles.input}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={styles.button}>
            Iniciar Sesión
          </button>
        </form>
      )}
    </div>
  );
};

const styles = {
  loginForm: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    margin: '10px 0',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  welcomeMessage: {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    marginTop: '20px',
  },
};

export default Login;
