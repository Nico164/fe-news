import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const doLogout = () => {
        window?.localSorage?.clear()
        // window?.location = "/"
        console.log("test")
    }
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">News</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">

                                <Link to="/auth" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link " onClick={doLogout}>Logout</span>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}