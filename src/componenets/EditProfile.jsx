import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import UserCard from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { addUser } from '../utils/userSlice';

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age || "");
    const [gender, setGender] = useState(user.gender || "");
    const [about, setAbout] = useState(user.about || "");
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();
    const saveProfile = async () => {
        try {
            setError("")
            const res = await axios.patch(BASE_URL + "/profile/edit", {
                age,
                gender,
                about,
                photoUrl
            }, { withCredentials: true })
            dispatch(addUser(res?.data?.data))
            setShowToast(true)
            const i = setTimeout(()=>{
                setShowToast(false)
            }, 3000)
        } catch (err) {
            debugger;
            setError("ERROR: " + err?.response?.data?.message)
        }
    }
    return (
        <>
            {
                showToast && <div className="toast toast-top toast-center">
                    <div className="alert alert-success">
                        <span>Profile updated successfully.</span>
                    </div>
                </div>
            }
            <div className="flex justify-center my-10">
                <div className="flex justify-center mx-10">
                    <div className="card bg-base-300 w-96 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title justify-center py-4">Edit Profile</h2>
                            {/* FORM FIELDS */}
                            <>
                                <div>
                                    <fieldset className="fieldset my-2">
                                        <legend className="fieldset-legend">First Name</legend>
                                        <input
                                            type="text"
                                            value={firstName}
                                            onChange={(e) => { setFirstName(e.target.value) }}
                                            className="input input-neutral"
                                        />
                                    </fieldset>
                                    <fieldset className="fieldset my-2">
                                        <legend className="fieldset-legend">Last Name</legend>
                                        <input
                                            type="text"
                                            value={lastName}
                                            onChange={(e) => { setLastName(e.target.value) }}

                                            className="input input-neutral"
                                        />
                                    </fieldset>
                                    <fieldset className="fieldset my-2">
                                        <legend className="fieldset-legend">photo URL</legend>
                                        <input
                                            type="text"
                                            value={photoUrl}
                                            onChange={(e) => { setPhotoUrl(e.target.value) }}

                                            className="input input-neutral"
                                        />
                                    </fieldset>
                                    <fieldset className="fieldset my-2">
                                        <legend className="fieldset-legend">Age</legend>
                                        <input
                                            type="text"
                                            value={age}
                                            onChange={(e) => { setAge(e.target.value) }}

                                            className="input input-neutral"
                                        />
                                    </fieldset>
                                    <fieldset className="fieldset my-2">
                                        <legend className="fieldset-legend">Gender</legend>
                                        <input
                                            type="text"
                                            value={gender}
                                            onChange={(e) => { setGender(e.target.value) }}

                                            className="input input-neutral"
                                        />
                                    </fieldset>
                                    <fieldset className="fieldset my-2">
                                        <legend className="fieldset-legend">About</legend>
                                        <input
                                            type="text"
                                            value={about}
                                            onChange={(e) => { setAbout(e.target.value) }}

                                            className="input input-neutral"
                                        />
                                    </fieldset>
                                </div>
                            </>
                            <p className="text-red-500">{error}</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                <UserCard user={{ firstName, lastName, age, gender, about, photoUrl }} />
            </div>
        </>
    )
}

export default EditProfile