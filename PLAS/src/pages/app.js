import React, { useEffect } from 'react';
import Layout from '../components/layout';
import { navigate } from "gatsby";
import config from "../service/fireconf";
import { Router } from "@reach/router";
import { initializeApp } from "firebase/app"
import PrivateRoute from "../components/privateRoute";
import Auth from "../components/auth";
import Viewer from "../components/viewer";
import Profile from "../components/profile";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification, onAuthStateChanged, updateProfile } from 'firebase/auth';
import StandardRoute from '../components/standardRoute';

export default function App(){
    // useEffect =(()=>{
    // if(typeof window !=='undefined'){
    //     const app =initializeApp(config);
    //     const auth = getAuth(app);
    //     onAuthStateChanged(auth, (user)=>{
    //         if(user){
    //             navigate('/app/profile')
    //         }else{
    //             navigate('/app/auth')
    //         }
    //     })
    // }});

    return(
        <Layout>
            <Router>
                <PrivateRoute path="/app/profile" component={Profile}/>
                <StandardRoute path="/app/viewer" component={Viewer}/>
                <Auth path="/app/auth"/>
            </Router>
        </Layout>
    )
}