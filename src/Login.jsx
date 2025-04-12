import axios from 'axios';
import React, { useState } from 'react'
// const Form = () => {
//     return(
//         <div>form</div>
//     )
// }
const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        try {
            const res = axios.post("http://localhost:3007/login", {
                emailId,
                password
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="flex justify-center my-10">
            <div className="card bg-base-300 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title justify-center py-4">Login</h2>
                    {/* FORM FIELDS */}
                    <>
                        <div>
                            <fieldset className="fieldset my-2">
                                <legend className="fieldset-legend">Email ID</legend>
                                <input
                                    type="text"
                                    value={emailId}
                                    onChange={(e) => { setEmailId(e.target.value) }}
                                    className="input input-neutral"
                                />
                            </fieldset>
                            <fieldset className="fieldset my-2">
                                <legend className="fieldset-legend">Password</legend>
                                <input
                                    type="text"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}

                                    className="input input-neutral"
                                />
                            </fieldset>
                        </div>
                    </>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login