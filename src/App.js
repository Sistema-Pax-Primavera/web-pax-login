import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoutesApp from "./routes/Routes";

function App() {
    return (
        <>
            <RoutesApp />
            <ToastContainer autoClose={3000} />
        </>
    );
}

export default App;