const Cv = ({nombre, titulacion, certificado, nivelSql, aptitudes, lenguajes }) => {
    return(
        <div class="container px-5 my-5">
                <div class="text-center mb-5">
                  
                    <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">{nombre}</span></h1>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-11 col-xl-9 col-xxl-8">
                        <section>
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h2 class="text-primary fw-bolder mb-0">Educación</h2>    
                            </div>
                            <div class="card shadow border-0 rounded-4 mb-5">
                                <div class="card-body p-5">
                                    <div class="row align-items-center gx-5">
                                        <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div class="bg-light p-4 rounded-4">
                                                <div class="text-primary fw-bolder mb-2">2018 - 2023</div>
                                                <div class="small fw-bolder">Estudiante</div>
                                                <div class="small text-muted">Informática</div>
                                                <div class="small text-muted">ORT </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8">
                                           
                                            <div><ul><li>Proyecto Final: App para facilitar el retiro de libros en la biblioteca escolar</li></ul></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                      
                        <div class="pb-5"></div>
                       
                    </div>
                </div>
            </div>
    )
    }

export default Cv;