import React, { useEffect, useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import CreateNews from "../components/CreateNews"
import MyNews from "../components/MyNews"

const ProfilePage = () => {
    const [profile, setProfile] = useState()
    const history = useHistory()
    const [activeMenu, setActiveMenu] = useState("")
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
            <div className="row">
                <div className="col-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-header">
                            Profile
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{profile?.firstName || '-'}</li>
                            <li className="list-group-item">{profile?.lastName || '-'}</li>
                            <li className="list-group-item">{profile?.email || '-'}</li>
                        </ul>
                    </div>
                    <div className="card mt-3" style={{ width: "18rem" }}>
                        <div className="card-header">
                            Menu
                        </div>
                        <ul className="list-group list-group-flush">
                            <li
                                className="list-group-item"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setActiveMenu("my-news")
                                }}>My News</li>
                                <li
                                className="list-group-item"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setActiveMenu("create-news")
                                }}>Create News</li>
                        </ul>
                    </div>
                </div>
                <div className="col-8">
                    {
                        activeMenu === "create-news" ? <CreateNews setActiveMenu={setActiveMenu} /> :  
                        activeMenu === "my-news" ? <MyNews /> : <MyNews />
                    }
                </div>
            </div>
        </div>
    )

}

export default ProfilePage