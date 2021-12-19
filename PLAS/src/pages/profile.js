import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, navigate } from "gatsby"
import { Button, Grid } from "@mui/material";
import config from "../service/fireconf"
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Profile(){
    const [name,setName] = useState("");
    const [uni,setUni] = useState("");
    const [everify,setEverify] = useState(false);
    useEffect(()=>{
        if(typeof window !== 'undefined'){
            const app =initializeApp(config);
            const auth = getAuth(app);
            onAuthStateChanged(auth, (user)=>{
                if(!user){
                    navigate("/auth")
                }else{
                    console.log(user.email);
                    setName(user.displayName)
                    setUni(user.photoURL);
                    if(user.emailVerified){
                        setEverify(true);
                    }
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
                        <h2>{name}</h2>
                        <h5>{uni}</h5>
                    </header>
                    <section>
                            

                    <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column">
                        <Grid item>
                            {!everify &&
                            <h3 color="red">Please verify your email first and then refresh the page to gain access to the data and other features.</h3>}
                        </Grid>
                        {everify &&
                        <>
                        <Grid item>
                            Please download all the data as a csv file by clicking <a>here</a>.
                        </Grid>
                        <Grid>
                            Wish to view the structure click <Link to="/viewer">here.</Link>
                        </Grid>
                        </>}
                        <Grid item>
                            <Button variant="contained" onClick={()=>{console.log(getAuth().currentUser);console.log(name)}}>Sign Out</Button>
                        </Grid>
                    </Grid>
                    </section>
                </div>
            </div>
        </>
    );
}