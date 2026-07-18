import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {

            await axios.get(
                "https://emp-backend-navy.vercel.app/api/logout",
                {
                    withCredentials: true,
                }
            );

            alert("Logout Successfully");

            navigate("/");

        } catch (error) {
            alert("Logout Failed");
        }
    };


    return (
        <center>
                <button
                    onClick={handleLogout}
                    className="btn btn-danger pt-10"
                >
                    Logout
                </button>        
        </center>
    );
};

export default Logout;