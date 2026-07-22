import React, { useEffect, useState } from 'react'
import { notify } from '../utils';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
const AddEmployee = () => {
    const navigate = useNavigate();
    const { id } = useParams();
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
      getEmployee()
    }, [id]);

    const getEmployee =async () => {
        if (id) {
            const response = await axios.get(`https://emp-backend-navy.vercel.app/api/employees/${id}`, { withCredentials: true })
            console.log(response.data.data)
            setEmployee(response.data.data)
            setUpdateMode(true);
        }
    }
    const handleAddEmployee = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            formData.append("name", employee.name.trim());
            formData.append("email", employee.email.trim());
            formData.append("phone", employee.phone);
            formData.append("department", employee.department.trim());
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
                setEmployee({
                    name: "",
                    email: "",
                    phone: "",
                    department: "",
                    salary: "",
                    profileImage: null,
                });
                navigate('/employee');
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
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-header bg-primary text-white text-center py-3">
                            <h3 className="mb-0">
                                {updateMode ? "Update Employee" : "Add Employee"}
                            </h3>
                        </div>

                        <div className="card-body p-4">

                            <form onSubmit={handleAddEmployee}>
                                <div className="row">

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={employee.name}
                                            onChange={handleChange}
                                            placeholder="Enter Name"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={employee.email}
                                            onChange={handleChange}
                                            placeholder="Enter Email"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone"
                                            value={employee.phone}
                                            onChange={handleChange}
                                            placeholder="Enter Phone Number"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            Department
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="department"
                                            value={employee.department}
                                            onChange={handleChange}
                                            placeholder="Enter Department"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            Salary
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="salary"
                                            value={employee.salary}
                                            onChange={handleChange}
                                            placeholder="Enter Salary"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            Profile Image
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={handleFileChange}
                                        />
                                    </div>

                                </div>

                                <div className="text-center mt-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary px-5"
                                    >
                                        {updateMode ? "Update Employee" : "Save Employee"}
                                    </button>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddEmployee