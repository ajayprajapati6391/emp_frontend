import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EmployeeManagementApp from './components/EmployeeManagementApp'
import EmployeeDetails from './components/EmployeeDetails'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import AddEmployee from './components/AddEmployee'

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/add-employee/:id" element={<AddEmployee/>} />
                <Route path="/add-employee/" element={<AddEmployee/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register123" element={<Register />} />
                <Route path="/employee" element={<EmployeeManagementApp />} />
                <Route path="/employee/:id" element={<EmployeeDetails />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App