import { useState, useEffect} from 'react';
import axios from 'axios';
import Creacion from '../components/Creacion';

const Creaciones = () => {
    const [creaciones, setCreaciones] = useState([]);

    const getCreaciones = () => axios.get('http://localhost:3000/creaciones.json').then(res => setCreaciones(res.data)).catch(error => console.log(error));

    useEffect(() => {
        getCreaciones();
    }, []);

    return (
        <div className="container text-center" style={{marginLeft: '10%'}}>
            <div className="row justify-content-center" style={{width: '120%'}}>
                {creaciones.map(creacion => <div key={creacion.Id} className="col-4" style={{marginTop: '3%'}}><Creacion creacion={creacion}></Creacion></div>)}
            </div>
        </div>
    );
}

export default Creaciones;