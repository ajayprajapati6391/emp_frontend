import React ,{useState}from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
    const username = sessionStorage.getItem("username");
    const [department, setDepartment] = useState("");
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
                                View All Employees
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
                            <i className="bi bi-diagram-3-fill fs-1 text-primary"></i>

                            <h4 className="mt-3">Department Wise Employees</h4>

                            <p>View employees grouped by department.</p>
                            <p>Select Department</p>
                            <select
                                className="form-select"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            >
                                <option value="">Select Department</option>
                                <option value="HR">HR</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Coding">Coding</option>
                                <option value="Designing">Designing</option>
                                <option value="Testing">Testing</option>
                            </select>

                            <Link
                                to={`/department-wise-employee/${department}`}
                                className={`btn btn-primary mt-3 ${!department ? "disabled" : ""}`}
                            >
                                View Employees
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;