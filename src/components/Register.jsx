import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: "",
        qualification: "",
        gender: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (user.password !== user.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post(
                "https://emp-backend-navy.vercel.app/api/admin/",
                user
            );

            alert(response.data.message);
        } catch (err) {
            console.log(err);
            alert("Registration Failed");
        }
    };

    return (
        <div
            className="container-fluid min-vh-100 d-flex justify-content-center align-items-center py-4"
            style={{
                background: "linear-gradient(135deg,#4facfe,#00f2fe)",
            }}
        >
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6">
                <div className="card shadow-lg border-0 rounded-4">
                    <div className="card-body p-4 p-md-5">

                        <div className="text-center mb-4">
                            <h2 className="fw-bold text-primary">
                                Employee Registration
                            </h2>
                            <p className="text-muted">
                                Create your account
                            </p>
                        </div>

                        <form onSubmit={handleRegister}>
                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Enter Name"
                                        value={user.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={user.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Age</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="age"
                                        placeholder="Enter Age"
                                        value={user.age}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Qualification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="qualification"
                                        placeholder="Enter Qualification"
                                        value={user.qualification}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label d-block">Gender</label>

                                    <div className="form-check form-check-inline">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="gender"
                                            value="Male"
                                            checked={user.gender === "Male"}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">
                                            Male
                                        </label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="gender"
                                            value="Female"
                                            checked={user.gender === "Female"}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">
                                            Female
                                        </label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="gender"
                                            value="Other"
                                            checked={user.gender === "Other"}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">
                                            Other
                                        </label>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Enter Password"
                                        value={user.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="col-md-6 mb-4">
                                    <label className="form-label">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={user.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100 py-2"
                            >
                                Register
                            </button>

                            <div className="text-center mt-3">
                                Already have an account?{" "}
                                <a href="/" className="text-decoration-none">
                                    Login
                                </a>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;