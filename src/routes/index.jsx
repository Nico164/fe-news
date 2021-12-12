import React from "react";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom"
import { Navbar } from "../components/Navbar";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";

const Routes = () => {
    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/auth">
                    <AuthPage />
                </Route>
                <Route path="/register">
                    <RegisterPage />
                </Route>
                {/* must login */}
                <Route path="/profile">
                    <ProfilePage />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes