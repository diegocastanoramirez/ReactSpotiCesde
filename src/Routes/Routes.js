import {Home} from '../Home/home.js';
import {Historia} from'../Historia/Historia.js';
import {Integrantes} from'../Integrantes/Integrantes.js';
import {Music} from'../Music/Music.js';
import { Routes, Route } from "react-router-dom";

import{Menu} from '../Menu/Menu.js'

export function Rutas(){
    return (
        <div classNameName="App">
          <h1>Welcome to React Router!</h1>
          <Menu></Menu>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="historia" element={<Historia />} />
            <Route path="integrantes" element={<Integrantes />} />
            <Route path="music" element={<Music />} />
          </Routes>
        </div>
      );
}