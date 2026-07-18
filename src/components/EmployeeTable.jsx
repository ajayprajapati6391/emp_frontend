import React from "react";
import { Link } from "react-router-dom";
import { notify } from "../utils";
import axios from "axios";

const EmployeeTable = ({
    employees,
    pagination = {},
    fetchEmployees,
    handleUpdateEmployee,
}) => {
    const headers = [
        "Name",
        "Email",
        "Phone",
        "Department",
        "Salary",
        "Join Date",
        "Actions",
    ];

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

    const handleDeleteEmployee = async (id) => {
        try {
            const isConfirmed = window.confirm(
                "Are you sure you want to delete this employee?"
            );

            if (!isConfirmed) return;

            const response = await axios.delete(
                `https://emp-backend-navy.vercel.app/api/employees/${id}`,{withCredentials:true}
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
            <td>
                <Link
                    to={`/employee/${employee._id}`}
                    className="text-decoration-none"
                >
                    {employee.name}
                </Link>
            </td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.department}</td>
            <td>₹{employee.salary}</td>
            <td>{new Date(employee.createdAt).toLocaleDateString()}</td>
            <td>
                <i
                    className="bi bi-pencil-fill text-warning me-3"
                    role="button"
                    onClick={() => handleUpdateEmployee(employee)}
                ></i>

                <i
                    className="bi bi-trash-fill text-danger"
                    role="button"
                    onClick={() => handleDeleteEmployee(employee._id)}
                ></i>
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

                                <h5 className="card-title text-primary">
                                    <Link
                                        to={`/employee/${employee._id}`}
                                        className="text-decoration-none text-primary fw-bold"
                                    >
                                        {employee.name}
                                    </Link>
                                </h5>

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

                                <div className="d-flex justify-content-end">
                                    <button
                                        className="btn btn-sm btn-warning me-2"
                                        onClick={() => handleUpdateEmployee(employee)}
                                    >
                                        <i className="bi bi-pencil-fill"></i>
                                    </button>

                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDeleteEmployee(employee._id)}
                                    >
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
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