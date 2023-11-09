import { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './screens/Layout';
import Home from './screens/Home';
import Nosotros from './screens/Nosotros';
import Creaciones from './screens/Creaciones';
import Error from './screens/Error/Error';
import Favoritos from './screens/Favoritos';
import FavoritoContext from './context/favoritoContext';
import './App.css';

function App() {
  const [favorito, setFavorito] = useState([]);

  useEffect(() => {
    let favoritoStorage = JSON.parse(localStorage.getItem("favorito"));
    if(favoritoStorage) {
      setFavorito(favoritoStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorito", JSON.stringify(favorito));
  }, [favorito]);

  return (
    <>
      <FavoritoContext.Provider value={{favorito, setFavorito}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/nosotros" element={<Nosotros/>}></Route>
              <Route path="/creaciones" element={<Creaciones />}></Route>
              <Route path="/favoritos" element={<Favoritos />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </FavoritoContext.Provider>
   </>
  );
}

export default App;
