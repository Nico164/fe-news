import React from "react";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom"
import { Navbar } from "../components/Navbar";
import HomePage from "../pages/HomePage";

const Routes = () => {
    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes