import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  const fetchEmployeeDetails = async () => {
    try {
      const response = await axios.get(`https://emp-backend-navy.vercel.app/api/employees/${id}`,{withCredentials:true});
      setEmployee(response.data.data);
    } catch (err) {
      alert('Error', err);
    }
  }
  useEffect(() => {
    fetchEmployeeDetails();
  }, [id])

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8">

          <div className="card shadow">

            <div className="card-header text-center">
              <h3 className="mb-0">Employee Details</h3>
            </div>

            <div className="card-body">

              <div className="row align-items-center g-4">

                {/* Image */}
                <div className="col-12 col-md-4 text-center">
                  <img
                    src={employee.profileImage}
                    alt={employee.name}
                    className="img-fluid rounded shadow"
                    style={{
                      maxWidth: "220px",
                      width: "100%",
                      height: "220px",
                      objectFit: "cover"
                    }}
                  />
                </div>

                {/* Details */}
                <div className="col-12 col-md-8">

                  <h3 className="mb-3">{employee.name}</h3>

                  <div className="row">

                    <div className="col-12 col-sm-6 mb-3">
                      <strong>Email</strong>
                      <p className="mb-0 text-break">{employee.email}</p>
                    </div>

                    <div className="col-12 col-sm-6 mb-3">
                      <strong>Phone</strong>
                      <p className="mb-0">{employee.phone}</p>
                    </div>

                    <div className="col-12 col-sm-6 mb-3">
                      <strong>Department</strong>
                      <p className="mb-0">{employee.department}</p>
                    </div>

                    <div className="col-12 col-sm-6 mb-3">
                      <strong>Salary</strong>
                      <p className="mb-0">₹ {employee.salary}</p>
                    </div>

                  </div>

                </div>

              </div>

              <hr />

              <div className="d-grid d-md-flex justify-content-md-end">
                <button
                  className="btn btn-primary px-4"
                  onClick={() => navigate("/employee")}
                >
                  Back
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails