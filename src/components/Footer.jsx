import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-3 mt-5">
            <div className="container">
                <div className="row">

                    {/* Logo & Description */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h3 className="fw-bold text-primary">EmployeeMS</h3>
                        <p className="mt-3">
                            Employee Management System helps organizations
                            manage employee records efficiently with a modern,
                            secure, and responsive interface.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="fw-bold">Quick Links</h5>

                        <ul className="list-unstyled mt-3">
                            <li className="mb-2">
                                <Link
                                    to="/"
                                    className="text-decoration-none text-light"
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="mb-2">
                                <Link
                                    to="/about"
                                    className="text-decoration-none text-light"
                                >
                                    About
                                </Link>
                            </li>

                            <li className="mb-2">
                                <Link
                                    to="/login"
                                    className="text-decoration-none text-light"
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="fw-bold">Contact</h5>

                        <p className="mt-3 mb-2">
                            <i className="bi bi-envelope-fill me-2"></i>
                            support@employeems.com
                        </p>

                        <p className="mb-2">
                            <i className="bi bi-telephone-fill me-2"></i>
                            +91 9876543210
                        </p>

                        <p>
                            <i className="bi bi-geo-alt-fill me-2"></i>
                            Prayagraj, Uttar Pradesh
                        </p>
                    </div>

                </div>

                <hr className="border-secondary" />

                <div className="text-center">
                    <p className="mb-0">
                        © 2026 Employee Management System. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;