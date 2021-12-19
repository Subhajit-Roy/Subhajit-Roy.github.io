import { getAuth } from "firebase/auth";
import React from "react";
import config from "../service/fireconf";
import * as firebase from 'firebase/app';
import { navigate } from "@reach/router";




if (typeof window !== 'undefined') {
    firebase.initializeApp(config);
  }

export default function PrivateRoute({component:Component,location, ...rest}){
    if (typeof window !== 'undefined') {
        firebase.initializeApp(config);
      }
    const auth = getAuth();
    const user = auth.currentUser;
    if(!user && location.pathname !=='/app/login'){
        navigate('/app/login')
        return null
    }
    return <Component {...rest}/>
}