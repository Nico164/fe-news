import React, { useEffect, useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const ProfilePage = () => {
    const [profile, setProfile] = useState()
    const history = useHistory()
    useEffect(() => {
        const token = window?.localStorage.getItem('token')
        if (!token) {
            history.replace('/')
        }
    }, [history])

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => {
        try {
            console.log("test")
            const token = window?.localStorage.getItem('token')
            const response = await axios.get('http://localhost:8080/profile', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            setProfile(response?.data?.data)
        } catch (error) {

        }

    }
    return (
        <div className="container mt-3">

            <div className="card" style={{width: "18rem"}}>
                <div className="card-header">
                    Profile
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{profile?.firstName || '-'}</li>
                    <li className="list-group-item">{profile?.lastName || '-'}</li>
                    <li className="list-group-item">{profile?.email || '-'}</li>
                </ul>
            </div>
        </div>
    )

}

export default ProfilePage