import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import Profile from "../components/profile";
import PrivateRoute from "../components/privateRoute";
import Auth from "../components/login";

export default function App(){
    return(
        <Layout>
            <Router>
                {/* <Profile path="/app/profile"/> */}
                <PrivateRoute path="/app/profile" component={Profile}/>
                <Auth path="/app/login"/>
            </Router>
        </Layout>
    );
}