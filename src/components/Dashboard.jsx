import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
    const token = document.cookie.includes("token");
    return (
        <div className="container py-5">

            <div className="text-center mb-5">
                <h2 className="fw-bold">Welcome to Employee Dashboard</h2>
                <p className="text-muted">
                    Manage employees from one place.
                </p>
            </div>

            <div className="row g-4">

                {/* Employees */}
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow border-0 h-100">
                        <div className="card-body text-center">
                            <i className="bi bi-people-fill fs-1 text-primary"></i>
                            <h4 className="mt-3">Employees</h4>
                            <p>View all employee records.</p>

                            <Link
                                to="/employee"
                                className="btn btn-primary"
                            >
                                View Employees
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Add Employee */}
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow border-0 h-100">
                        <div className="card-body text-center">
                            <i className="bi bi-person-plus-fill fs-1 text-success"></i>
                            <h4 className="mt-3">Add Employee</h4>
                            <p>Create a new employee record.</p>

                            <Link
                                to="/add-employee"
                                className="btn btn-success"
                            >
                                Add Employee
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Profile */}
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow border-0 h-100">
                        <div className="card-body text-center">
                            <i className="bi bi-person-circle fs-1 text-warning"></i>
                            <h4 className="mt-3">My Profile</h4>
                            <p>View your account details.</p>

                            <Link
                                to="/profile"
                                className="btn btn-warning text-dark"
                            >
                                Profile
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Dashboard;