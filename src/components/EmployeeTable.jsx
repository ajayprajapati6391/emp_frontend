import React from "react";
import { Link } from "react-router-dom";
import { notify } from "../utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const EmployeeTable = ({
    employees,
    pagination = {},
    fetchEmployees,
}) => {
    const headers = [
        "Name",
        "Email",
        "Phone",
        "Department",
        "Salary",
        "Join Date",
        "Actions",
        " View Profile",
    ];
    
    const navigate = useNavigate();
    const { currentPage, totalPage } = pagination;

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            handlePagination(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            handlePagination(currentPage - 1);
        }
    };

    const handlePagination = (page) => {
        fetchEmployees("", page, 5);
    };

    const handleUpdateEmployee = (id) => {
        navigate(`/add-employee/${id}`);
    }

    const handleDeleteEmployee = async (id) => {
        try {
            const isConfirmed = window.confirm(
                "Are you sure you want to delete this employee?"
            );

            if (!isConfirmed) return;

            const response = await axios.delete(
                `https://emp-backend-navy.vercel.app/api/employees/${id}`, { withCredentials: true }
            );

            const { success, message } = response.data;

            if (success) {
                notify("success", message);
            } else {
                notify("error", message);
            }

            fetchEmployees();
        } catch (err) {
            console.error(err);
            notify("error", "Failed to delete Employee");
        }
    };

    const TableRow = ({ employee }) => (
        <tr>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.department}</td>
            <td>₹{employee.salary}</td>
            <td>{new Date(employee.createdAt).toLocaleDateString()}</td>
            <td>
                <i
                    className="bi bi-pencil-fill text-warning me-3"
                    role="button"
                    onClick={() => handleUpdateEmployee(employee._id)}
                ></i>

                <i
                    className="bi bi-trash-fill text-danger"
                    role="button"
                    onClick={() => handleDeleteEmployee(employee._id)}
                ></i>
            </td>
            <td>
                <button className="btn btn-primary btn-sm">
                    <Link
                        to={`/employee/${employee._id}`}
                        className="text-decoration-none text-white"
                    >
                        View
                    </Link>
                </button>
            </td>
        </tr>
    );

    const pageNumbers = Array.from(
        { length: totalPage || 1 },
        (_, index) => index + 1
    );

    return (
        <>
            {/* Mobile Cards */}
            <div className="d-block d-md-none">
                {employees.length === 0 ? (
                    <div className="alert alert-warning text-center">
                        Data Not Found
                    </div>
                ) : (
                    employees.map((employee) => (
                        <div className="card shadow-sm mb-3" key={employee._id}>
                            <div className="card-body">

                                <p className="mb-2">
                                    <strong>Name:</strong> {employee.name}
                                </p>
                                <hr />
                                <p className="mb-2">
                                    <strong>Email:</strong> {employee.email}
                                </p>

                                <p className="mb-2">
                                    <strong>Phone:</strong> {employee.phone}
                                </p>

                                <p className="mb-2">
                                    <strong>Department:</strong> {employee.department}
                                </p>

                                <p className="mb-2">
                                    <strong>Salary:</strong> ₹{employee.salary}
                                </p>

                                <p className="mb-3">
                                    <strong>Join Date:</strong>{" "}
                                    {new Date(employee.createdAt).toLocaleDateString()}
                                </p>

                                <div className="d-flex justify-content-end gap-2">
                                    <button
                                        className="btn btn-warning btn-sm"
                                        onClick={() => handleUpdateEmployee(employee._id)}
                                    >
                                        <i className="bi bi-pencil-fill"></i>
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDeleteEmployee(employee._id)}
                                    >
                                        <i className="bi bi-trash-fill"></i>
                                    </button>

                                    <Link
                                        to={`/employee/${employee._id}`}
                                        className="btn btn-primary btn-sm"
                                    >
                                        <i className="bi bi-eye-fill me-1"></i>
                                        View
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Desktop Table */}
            <div className="table-responsive d-none d-md-block">
                <table className="table table-striped table-hover align-middle">
                    <thead className="table-dark">
                        <tr>
                            {headers.map((header, i) => (
                                <th key={i}>{header}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {employees.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="text-center">
                                    Data Not Found
                                </td>
                            </tr>
                        ) : (
                            employees.map((emp) => (
                                <TableRow key={emp._id} employee={emp} />
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3">

                <span className="badge bg-primary mb-3 mb-md-0">
                    Page {currentPage} of {totalPage}
                </span>

                <div className="d-flex flex-wrap justify-content-center">

                    <button
                        className="btn btn-outline-primary btn-sm me-2 mb-2"
                        disabled={currentPage === 1}
                        onClick={handlePreviousPage}
                    >
                        Previous
                    </button>

                    {pageNumbers.map((page) => (
                        <button
                            key={page}
                            className={`btn btn-sm me-2 mb-2 ${currentPage === page
                                ? "btn-primary"
                                : "btn-outline-primary"
                                }`}
                            onClick={() => handlePagination(page)}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        className="btn btn-outline-primary btn-sm mb-2"
                        disabled={currentPage === totalPage}
                        onClick={handleNextPage}
                    >
                        Next
                    </button>

                </div>
            </div>
        </>
    );
};

export default EmployeeTable;