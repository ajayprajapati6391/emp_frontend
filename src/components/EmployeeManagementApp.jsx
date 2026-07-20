import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddEmployee from './AddEmployee'
import EmployeeTable from './EmployeeTable'
import { ToastContainer } from 'react-toastify';
import { notify } from '../utils';
import { Link } from 'react-router-dom';

const EmployeeManagementApp = () => {
  const [employeeObj, setEmployeeObj] = useState(null)
  const [employeesData, setEmployeesData] = useState({
    employees: [],
    pagination: {
      currentPage: 1,
      pageSize: 5,
      totalEmployees: 0,
      totalPages: 0
    }
  })

  const fetchEmployees = async (search = '', page = 1, limit = 5) => {
    try {
      const response = await axios.get(`https://emp-backend-navy.vercel.app/api/employees?page=${page}&limit=${limit}&search=${search}`, { withCredentials: true })
      setEmployeesData(response.data.data);
    } catch (err) {
      notify("error", err.message);
      console.log('Error', err);
    }
  }
  useEffect(() => {
    fetchEmployees()
  }, [])

  const handleAddEmployee = () => {
    setShowModal(true)
  }

  const handleSearch = (e) => {
    fetchEmployees(e.target.value)
  }

  const handleUpdateEmployee = async (emp) => {
    setEmployeeObj(emp);
  }

  return (
    <div className="container-fluid py-3">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-11 col-xl-10">

          <h2 className="text-center mb-4 fw-bold">
            Employee Management App
          </h2>

          <div className="card shadow">
            <div className="card-body">

              {/* Header */}
              <div className="row g-2 align-items-center mb-3">

                {/* Add Button */}
                <div className="col-4 col-md-2">
                  <button
                    className="btn btn-primary w-100"
          
                  >
                    <Link to="/add-employee" className='text-decoration-none text-white'>Add</Link>
                  </button>
                </div>

                {/* Search */}
                <div className="col-8 col-md-10">
                  <input
                    type="text"
                    placeholder="Search Employees..."
                    className="form-control"
                    onChange={handleSearch}
                  />
                </div>

              </div>

              {/* Employee Table */}
              <div className="table-responsive">
                <EmployeeTable
                  employees={employeesData.employees}
                  pagination={employeesData.pagination}
                  fetchEmployees={fetchEmployees}
                  handleUpdateEmployee={handleUpdateEmployee}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
}

export default EmployeeManagementApp