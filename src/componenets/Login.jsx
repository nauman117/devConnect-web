import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import { BASE_URL } from '../utils/constants';
// const Form = () => {
//     return(
//         <div>form</div>
//     )
// }
const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + "/login",
                {
                    emailId,
                    password
                },
                {
                    withCredentials: true
                }
            );
            
            dispatch(addUser(res.data));
            navigate("/");
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