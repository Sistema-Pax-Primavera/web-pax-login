import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "../pages/login";

const RoutesApp = () => (
    <BrowserRouter basename="">
        <Routes>
            <Route exact path="*" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;