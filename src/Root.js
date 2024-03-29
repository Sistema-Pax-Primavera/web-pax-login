import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoutesApp from "./routes/Routes";

function Root() {
    return (
        <>
            <RoutesApp />
            <ToastContainer />
        </>
    );
}

export default Root;