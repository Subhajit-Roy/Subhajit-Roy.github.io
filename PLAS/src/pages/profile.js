import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { navigate } from "gatsby"
import { Button, Grid } from "@mui/material";
import config from "../service/fireconf"
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import * as firebase from 'firebase/app';

export default function Profile(){
    useEffect(()=>{
        if(typeof window !== 'undefined'){
            const app =initializeApp(config);
            const auth = getAuth(app);
            onAuthStateChanged(auth, (user)=>{
                if(!user){
                    navigate("/auth")
                }else{
                    console.log(user.email)
                }
            })
        }
    })
    return(
        <>
            <Helmet>
                <title>PLAS: Profile</title>
            </Helmet>
            <div id="main" className="wrapper style1">
                <div className="container">
                    <header className="major">
                        <h2>Profile Name</h2>
                    </header>

                    <section>
                        <div className="downloadRawCSV">
                            Please download all the data as a csv file by clicking <a>here</a>.
                        </div>
                    </section>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item>
                            <Button variant="contained" onClick={()=>{console.log(getAuth().currentUser)}}>Sign Out</Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}