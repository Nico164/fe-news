import React from "react";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom"
import { Navbar } from "../components/Navbar";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import ProfilePage from "../pages/ProfilePage";

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
                {/* must login */}
                <Route path="/profile">
                    <ProfilePage />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes