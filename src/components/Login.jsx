import React, { useState } from "react";
import axios from "axios";
import { notify } from "../utils";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://emp-backend-navy.vercel.app/api/adminlogin",
                user,{withCredentials:true}
            );
            navigate('/employee')
            alert(response.data.message)
        } catch (err) {
            console.log(err);
            alert(err.response?.data?.message || err.message);
        }
    };

    return (
        <div
            className="container-fluid vh-100 d-flex align-items-center justify-content-center"
            style={{
                background:
                    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            }}
        >
            <div className="row w-100 justify-content-center">
                <div className="col-11 col-sm-10 col-md-8 col-lg-5 col-xl-4">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-4 p-md-5">

                            <div className="text-center mb-4">
                                <h2 className="fw-bold text-primary">
                                    Employee Login
                                </h2>
                                <p className="text-muted">
                                    Sign in to continue
                                </p>
                            </div>

                            <form onSubmit={handleLogin}>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Email"
                                        name="email"
                                        value={user.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Password"
                                        name="password"
                                        value={user.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="remember"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="remember"
                                        >
                                            Remember Me
                                        </label>
                                    </div>

                                    <a
                                        href="#"
                                        className="text-decoration-none"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>

                                <button
                                    className="btn btn-primary w-100 btn-lg"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>

                    <p className="text-center text-white mt-3">
                        © 2026 Employee Management System
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;