import React from 'react'
import { Routes, Navigate, Route } from 'react-router-dom'
import EmployeeManagementApp from './components/EmployeeManagementApp'
import EmployeeDetails from './components/EmployeeDetails'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/gegister123" element={<Register />} />
                <Route path="/employee" element={<EmployeeManagementApp />} />
                <Route path="/employee/:id" element={<EmployeeDetails />} />
            </Routes>
        </div>
    )
}

export default App