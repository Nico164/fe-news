import React, { useEffect, useState } from "react"
import axios from "axios"
import { ReactComponent as Loading } from "../loading.svg"
import { Fragment } from "react"
import { Link, useHistory } from "react-router-dom"

const AuthPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading , setIsLoading] = useState(false)

    useEffect(( )=> {
        const token = window?.localStorage.getItem('token')
       if (token) {
           history.replace('/profile')
       }
    }, [])

    const changeEmail = (event) => {
        setEmail(event?.target?.value)
    };

    const changePassword = (event) => {
        setPassword(event?.target?.value)
    };

    const doLogin = async (event) => {
        event?.preventDefault()
        try {
            setIsLoading(true)
            const {data} = await axios.post("http://localhost:8080/login", {email: email, password: password})
            console.log(data?.data?.token)

            await window?.localStorage.setItem('token', data?.data?.token)
            setIsLoading(false)
            history.replace('/profile')
        } catch (error) {
            setIsLoading(false)
        }
    }

    return (
        <div className="container mt-3">
            <form onSubmit={doLogin}>
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input
                            onChange={changeEmail}
                            type="email"
                            className="form-control"
                            id="staticEmail"
                            placeholder="ex. admin@domain.com"
                            value={email} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onChange={changePassword} value={password} className="form-control" id="inputPassword" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" disabled={isLoading}>Login</button>
                <p>No acoount? Register now <Link to ="/register">here</Link></p>
            </form>
        </div>
    )

}

export default AuthPage