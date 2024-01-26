import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/login";
import Home from "./pages/home";

const RoutesApp = () => (
    <BrowserRouter basename="pax-primavera">
        <Routes>
            <Route exact path="*" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/associado" element={<Home />} />
            <Route exact path="/vendas" element={<Home />} />
            <Route exact path="/financeiro" element={<Home />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;