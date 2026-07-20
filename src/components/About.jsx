import React from "react";

const About = () => {
    return (
        <div className="container py-5">

            {/* Heading */}
            <div className="text-center mb-5">
                <h1 className="fw-bold text-primary">About Us</h1>
                <p className="text-muted">
                    Learn more about our Employee Management System.
                </p>
            </div>

            <div className="row align-items-center">

                {/* Image */}
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                        alt="About"
                        className="img-fluid rounded shadow"
                    />
                </div>

                {/* Content */}
                <div className="col-lg-6">
                    <h2 className="fw-bold mb-3">
                        Employee Management System
                    </h2>

                    <p className="text-muted">
                        Our Employee Management System is designed to simplify
                        employee record management. It enables organizations to
                        efficiently add, update, delete, and view employee
                        information in one centralized platform.
                    </p>

                    <p className="text-muted">
                        The application is built with modern web technologies
                        like <strong>React</strong>, <strong>Node.js</strong>,
                        <strong> Express.js</strong>, <strong>MongoDB</strong>,
                        and <strong>Bootstrap</strong>, ensuring a fast,
                        responsive, and user-friendly experience.
                    </p>

                    <div className="row mt-4">

                        <div className="col-6 mb-3">
                            <div className="card text-center shadow-sm border-0">
                                <div className="card-body">
                                    <i className="bi bi-people-fill fs-1 text-primary"></i>
                                    <h5 className="mt-2">Employee Records</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 mb-3">
                            <div className="card text-center shadow-sm border-0">
                                <div className="card-body">
                                    <i className="bi bi-shield-check fs-1 text-success"></i>
                                    <h5 className="mt-2">Secure Data</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="card text-center shadow-sm border-0">
                                <div className="card-body">
                                    <i className="bi bi-speedometer2 fs-1 text-warning"></i>
                                    <h5 className="mt-2">Fast Performance</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="card text-center shadow-sm border-0">
                                <div className="card-body">
                                    <i className="bi bi-phone fs-1 text-danger"></i>
                                    <h5 className="mt-2">Responsive Design</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;