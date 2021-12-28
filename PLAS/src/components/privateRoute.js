import { getAuth } from "firebase/auth";
import React from "react";
import config from "../service/fireconf";
// import * as firebase from 'firebase/app';
import { navigate } from "@reach/router";
import { initializeApp } from "firebase/app"





export default function PrivateRoute({component:Component,location, ...rest}){
  if (typeof window !== 'undefined') {
    const app =initializeApp(config);
    const auth = getAuth(app);
    const user = auth.currentUser;
    if(!user && location.pathname !=='/app/auth'){
        navigate('/app/auth')
        return null
    }else{
      return <Component {...rest}/>
    }
  }
}