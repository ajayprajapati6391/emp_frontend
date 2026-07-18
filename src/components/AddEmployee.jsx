import React, { useEffect, useState } from 'react'
import { notify } from '../utils';
import axios from 'axios';
const AddEmployee = ({
    showModal, setShowModal, fetchEmployees, employeeObj
}) => {
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
        salary: '',
        profileImage: null
    });

    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        if (employeeObj) {
            setEmployee(employeeObj);
            setUpdateMode(true);
        }
    }, [employeeObj]);
    const handleAddEmployee = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            formData.append("name", employee.name);
            formData.append("email", employee.email);
            formData.append("phone", employee.phone);
            formData.append("department", employee.department);
            formData.append("salary", employee.salary);

            if (employee.profileImage) {
                formData.append("profileImage", employee.profileImage);
            }

            const response = updateMode
                ? await axios.put(
                    `https://emp-backend-navy.vercel.app/api/employees/${employee._id}`,
                    formData,
                    {
                        withCredentials: true,
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                )
                : await axios.post(
                    `https://emp-backend-navy.vercel.app/api/employees`,
                    formData,
                    {
                        withCredentials: true,
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

            const { success, message } = response.data;

            if (success) {
                notify("success", message);
                setShowModal(false);
                setUpdateMode(false);

                setEmployee({
                    name: "",
                    email: "",
                    phone: "",
                    department: "",
                    salary: "",
                    profileImage: null,
                });

                fetchEmployees();
            } else {
                notify("error", message);
            }
        } catch (err) {
            console.error(err);
            notify("error", "Failed to create employee");
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleFileChange = (e) => {
        setEmployee({ ...employee, profileImage: e.target.files[0] });
    };


    return (
        <div
            className={`modal ${showModal ? "d-block" : ""}`}
            tabIndex="-1"
            role="dialog"
            style={{ display: showModal ? "block" : "none" }}
        >
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">
                            {updateMode ? "Update Employee" : "Add Employee"}
                        </h5>

                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setShowModal(false)}
                        ></button>
                    </div>

                    <div className="modal-body">

                        <form onSubmit={handleAddEmployee}>
                            <div className="row">

                                <div className="col-12 col-md-6 mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={employee.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-12 col-md-6 mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={employee.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-12 col-md-6 mb-3">
                                    <label className="form-label">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        value={employee.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-12 col-md-6 mb-3">
                                    <label className="form-label">Department</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="department"
                                        value={employee.department}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-12 col-md-6 mb-3">
                                    <label className="form-label">Salary</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="salary"
                                        value={employee.salary}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-12 col-md-6 mb-3">
                                    <label className="form-label">Profile Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="profileImage"
                                        onChange={handleFileChange}
                                    />
                                </div>

                            </div>

                            <div className="d-grid mt-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    {updateMode ? "Update Employee" : "Save Employee"}
                                </button>
                            </div>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddEmployee