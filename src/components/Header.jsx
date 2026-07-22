import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { notify } from "../utils";

const Header = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState()
    const user = sessionStorage.getItem("username");
    const handleLogout = async () => {
        try {
            const response = await axios.get(
                "https://emp-backend-navy.vercel.app/api/logout",
                {
                    withCredentials: true,
                }
            );

            if (response.data.success) {
                sessionStorage.clear();
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
            notify("error", "Logout Failed");
        }
    };
    useEffect(()=>{
        setUsername(sessionStorage.getItem("username") || 'profile')
    })

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
            <div className="container">

                <Link className="navbar-brand fw-bold fs-4" to="/">
                    EmployeeMS
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="bi bi-house-door-fill me-1"></i>
                                Home
                            </Link>
                        </li>

                        {user && <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">
                                <i className="bi bi-grid-fill"></i>
                                Dashboard
                            </Link>
                        </li>}

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                <i className="bi bi-info-circle-fill me-1"></i>
                                About
                            </Link>
                        </li>

                        <li className="nav-item nav-link">
                            <i className="bi bi-person-circle me-1"></i>
                            {username}
                        </li>

                        <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                            {user ? (
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={handleLogout}
                                >
                                    <i className="bi bi-box-arrow-right me-1"></i>
                                    Logout
                                </button>
                            ) : (
                                <Link to="/login" className="btn btn-success btn-sm">
                                    <i className="bi bi-box-arrow-in-right me-1"></i>
                                    Login
                                </Link>
                            )}
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    );
};

export default Header;