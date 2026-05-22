// Purpose: Main React app component
// Handles: routing, page navigation, authentication state

import React from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import "./styles/main.css";

function ProtectedRoute({ children }){
    const token = localStorage.getItem("token");

    if(!token){
        return <Navigate to="/login" replace />;
    }

    return children;
}

function App(){
    return(
        <Router>
            <div className="app-container">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        {/*Public Routes*/}
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        {/*Private Routes*/}
                        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />

                        {/*Default Routes*/}
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;

// REMOVE LATER
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
