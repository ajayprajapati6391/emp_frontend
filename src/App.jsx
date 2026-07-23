import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import EmployeeManagementApp from "./components/EmployeeManagementApp";
import EmployeeDetails from "./components/EmployeeDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import AddEmployee from "./components/AddEmployee";
import Department from "./components/Department";

const App = () => {
    const [token, setToken] = useState(null);
    useEffect(() => {
        setToken(sessionStorage.getItem('username'))
    }, [])
    return (
        <div>
            <Header setToken={setToken} />
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/register123" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/login"
                    element={token ? <Navigate to="/dashboard" replace /> : <Login setToken={setToken} />}
                />

                {/* Protected Routes */}
                <Route
                    path="/dashboard"
                    element={token ? <Dashboard /> : <Navigate to="/login" replace />}
                />

                <Route
                    path="/department-wise-employee/:department"
                    element={token ? <Department /> : <Navigate to="/login" replace />}
                />

                <Route
                    path="/add-employee"
                    element={token ? <AddEmployee /> : <Navigate to="/login" replace />}
                />

                <Route
                    path="/add-employee/:id"
                    element={token ? <AddEmployee /> : <Navigate to="/login" replace />}
                />

                <Route
                    path="/employee"
                    element={
                        token ? (
                            <EmployeeManagementApp />
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />

                <Route
                    path="/employee/:id"
                    element={
                        token ? <EmployeeDetails /> : <Navigate to="/login" replace />
                    }
                />

                {/* Invalid Route */}
                <Route
                    path="*"
                    element={<Navigate to={token ? "/dashboard" : "/login"} replace />}
                />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;