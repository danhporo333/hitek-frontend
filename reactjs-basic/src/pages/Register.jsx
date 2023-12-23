import "../Register.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() { 
    return (
        <div className="body1">
            <div className="wrapper">
                <form action="">
                    <h1>Registration</h1>

                    <div className="input-box">
                        <div className="input-field">
                            <input type="text" placeholder="Full Name" required="" />
                            <i className="bx bxs-user" />
                        </div>
                        <div className="input-field">
                            <input type="text" placeholder="Username" required="" />
                            <i className="bx bxs-user" />
                        </div>
                    </div>

                    <div className="input-box">
                        <div className="input-field">
                            <input type="email" placeholder="Email" required="" />
                            <i className="bx bxs-envelope" />
                        </div>
                        <div className="input-field">
                            <input type="number" placeholder="Phone Number" required="" />
                            <i className="bx bxs-phone" />
                        </div>
                    </div>

                    <div className="input-box">
                        <div className="input-field">
                            <input type="password" placeholder="Password" required="" />
                            <i className="bx bxs-lock-alt" />
                        </div>
                        <div className="input-field">
                            <input type="password" placeholder="Confirm Password" required="" />
                            <i className="bx bxs-lock-alt" />
                        </div>
                    </div>

                    <label>
                    <input type="checkbox" />I hereby declare that the above informationprovided is true and correct</label>

                    <button type="submit" className="btn">Register</button>
                </form>
            </div>
    </div>
    );
}
export default App;