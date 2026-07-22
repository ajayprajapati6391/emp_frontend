import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";

const Department = () => {
    const { department } = useParams();
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async () => {
        if (!department) return;

        try {
            const response = await axios.get(
                `https://emp-backend-navy.vercel.app/api/employees/department/${department}`,
                {
                    withCredentials: true,
                }
            );
            setEmployees(response?.data?.data?.employees);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, [department]);

    return (
        <div className="container py-5">

            {/* Header */}
            <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">
                    <i className="bi bi-diagram-3-fill me-2"></i>
                    Department Employees
                </h2>

                <p className="text-muted">
                    View all employees of the selected department.
                </p>
            </div>

            {/* Summary Card */}
            <div className="card shadow-sm border-0 mb-4">
                <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center">

                    <div>
                        <h4 className="mb-1">
                            Department :
                            <span className="badge bg-primary ms-2">
                                {department}
                            </span>
                        </h4>

                        <small className="text-muted">
                            Total Employees : {employees.length}
                        </small>
                    </div>

                    <div className="mt-3 mt-md-0">
                        <i
                            className="bi bi-people-fill text-primary"
                            style={{ fontSize: "3rem" }}
                        ></i>
                    </div>

                </div>
            </div>

            {/* Employee Table */}
            <div className="card shadow border-0">
                <div className="card-header bg-primary text-white fw-bold">
                    Employee List
                </div>

                <div className="card-body">

                    <EmployeeTable
                        employees={employees}
                        pagination={{
                            currentPage: 1,
                            totalPage: 1,
                        }}
                        fetchEmployees={fetchEmployees}
                    />

                </div>
            </div>

        </div>
    );
};

export default Department;