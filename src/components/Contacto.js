import React from 'react';

const Contacto = () => {
  return (
    <div className="contact-form" style={styles.contactForm}>
      <form>
        <h2 style={styles.heading}>Contacto</h2>
        <div className="form-group" style={styles.formGroup}>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo Electrónico" style={styles.input} />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <input type="text" className="form-control" id="exampleInputText1" placeholder="Nombre Completo" style={styles.input} />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <textarea className="form-control" rows="5" placeholder="Mensaje" style={styles.textarea}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={styles.button}>Enviar</button>
      </form>
    </div>
  );
}



const styles = {
  contactForm: {
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
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

export default Contacto;
