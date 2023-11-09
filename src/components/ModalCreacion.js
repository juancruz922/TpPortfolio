import { useContext } from 'react';
import FavoritoContext from "../context/favoritoContext";

const ModalCreacion = ({creacion}) => {
    const favorito = useContext(FavoritoContext);

    return (
        <div className="modal fade" id={"exampleModal" + creacion.Id} tabIndex="-1" aria-labelledby={"exampleModalLabel" + creacion.Id} aria-hidden="true" data-backdrop="static">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id={"exampleModalLabel" + creacion.Id}>{creacion.Titulo}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        
                        <p className="text-muted">{creacion.FechaInicio + " - " + creacion.FechaFin}</p>
                        <p>{creacion.Descripcion}</p>
                    </div>
                    <div className="modal-footer">
                        {favorito.favorito.find((c) => c.Id === creacion.Id)?<button type="button" className="btn btn-danger" onClick={() => favorito.setFavorito(favorito.favorito.filter(c => c !== creacion))}>Quitar de favoritos</button>:<button type="button" className="btn btn-success" onClick={() => favorito.setFavorito([...favorito.favorito, creacion])}>Agregar a favoritos</button>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalCreacion;