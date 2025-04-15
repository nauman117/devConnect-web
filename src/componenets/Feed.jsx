import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import axios from 'axios'
import UserCard from './UserCard'

const Feed = () => {
    const dispatch = useDispatch()
    const feed = useSelector(store => store.feed)
    console.log("🚀 ~ Feed ~ feed:", feed)

    const getFeed = async () => {
        if (feed) return
        try {
            const res = await axios.get(BASE_URL + "/feed", { withCredentials: true })
            dispatch(addFeed(res?.data?.data))
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getFeed()
    }, [])

    if (!feed) return null
    return (
        <div className="flex justify-center m-10">
            <UserCard user={feed[0]} />
        </div>
    )
}

export default Feed