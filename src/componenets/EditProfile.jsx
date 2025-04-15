import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import UserCard from './UserCard';

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [error, setError] = useState("");

    return (
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
                                        value={lastName}
                                        onChange={(e) => { setGender(e.target.value) }}

                                        className="input input-neutral"
                                    />
                                </fieldset>
                                <fieldset className="fieldset my-2">
                                    <legend className="fieldset-legend">About</legend>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => { setAbout(e.target.value) }}

                                        className="input input-neutral"
                                    />
                                </fieldset>
                            </div>
                        </>
                        <p className="text-red-500">{error}</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Save Profile</button>
                        </div>
                    </div>
                </div>
            </div>
            <UserCard user={{firstName,lastName, age, gender, about, photoUrl}} />
        </div>
    )
}

export default EditProfile