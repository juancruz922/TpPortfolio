import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Creacion from '../components/Creacion';
import axios from 'axios';

const Home = () => {
    const [creaciones, setCreaciones] = React.useState([]);

    const getCreaciones = () => axios.get('http://localhost:3000/creaciones.json').then(res => setCreaciones(res.data)).catch(error => console.log(error));

    React.useEffect(() => {
        getCreaciones();
    }, []);

    return (
        <main className="flex-shrink-0" style={styles.main}>
            <header className="py-5" style={styles.header}>
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-12 text-center text-xxl-start">
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                <Link to="/nosotros" className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" style={styles.primaryBtn}>Sobre mí</Link>
                                <Link to="/creaciones" className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" style={styles.secondaryBtn}>Proyectos</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="bg-light py-5" style={styles.aboutSection}>
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xxl-8">
                            <div className="text-center my-5">
                                <h2 className="display-5 fw-bolder" style={styles.portafolioTitle}>Juan Cruz Grinceri</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;

const styles = {
    main: {
    },
    header: {
    },
    primaryBtn: {
        backgroundColor: '#e21e80', // Color rosa
        color: '#fff',
        marginRight: '15px',
        fontSize: '1.25rem',
    },
    secondaryBtn: {
        backgroundColor: '#343a40',
        color: '#fff',
        fontSize: '1.25rem',
    },
    aboutSection: {
        backgroundColor: '#f8f9fa',
    },
    portafolioTitle: {
        color: '#e21e80',
        fontSize: '2.5rem',
    },
};
