import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <section className="bg-light min-vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Content */}
                    <div className="col-lg-6 text-center text-lg-start mb-5  mb-lg-0">

                        <h1 className="display-4 fw-bold">
                            Manage Your Employees <br />
                            <span className="text-primary">Efficiently & Securely</span>
                        </h1>

                        <p className="lead text-muted mt-4">
                            A modern Employee Management System that helps you
                            manage employee records, departments, salaries,
                            and profiles with ease. Fast, secure, and responsive.
                        </p>

                        <div className="mt-4">
                            <Link
                                to="/login"
                                className="btn btn-primary btn-lg me-3 mb-2"
                            >
                                Start
                            </Link>

                            <Link
                                to="/about"
                                className="btn btn-outline-primary btn-lg mb-2"
                            >
                                About
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="col-lg-6 text-center">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
                            alt="Employee Management"
                            className="img-fluid rounded-4 shadow-lg"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;