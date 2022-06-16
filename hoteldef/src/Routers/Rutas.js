import * as React from "react";
import { Routes, Route } from "react-router-dom";
import {Menu} from '../shared/Menu/Menu.js'
import {Home} from '../Home/Home.js'


export function Rutas() {
  return (
    <div>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />} />
            
        </Routes>
    </div>
  );
}