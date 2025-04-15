import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants'
import { addUser } from '../utils/userSlice'
import axios from 'axios'

const Body = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user);

    const fetchUser = async () => {
        try {
            const res = await axios.get(BASE_URL + "/profile/view",
                {
                    withCredentials: true
                }
            );

            dispatch(addUser(res.data));
        } catch (err) {
            if (err.status === 401) navigate("/login");
            console.log(err);
        }
    }
    useEffect(() => {
        if (!userData) {
            fetchUser()
        }
    }, [])
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Body