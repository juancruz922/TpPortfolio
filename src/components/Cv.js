import React from 'react';

const Cv = ({ nombre, titulacion, certificado, nivelSql, aptitudes, lenguajes }) => {
  return (
    <div className="container px-5 my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">{nombre}</span></h1>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
          <section>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h2 className="text-info fw-bolder mb-0">Educación</h2>
            </div>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-info fw-bolder mb-2">2018 - 2023</div>
                      <div className="small fw-bolder">Estudiante</div>
                      <div className="small text-muted">Informática</div>
                      <div className="small text-muted">ORT</div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      <ul>
                        <li>Proyecto Final: App para facilitar el retiro de libros en la biblioteca escolar</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="pb-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
