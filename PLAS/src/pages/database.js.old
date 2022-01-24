import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, navigate } from "gatsby"
import { Button, Grid } from "@mui/material";
import config from "../service/fireconf"
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import "../database/5000_final.csv" as csvdata;
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import axios from "axios";


function LogOut(){
    const auth = getAuth()
    signOut(auth).then(()=>{
        navigate("/app/auth");
        alert("Sign Out success");
    }).catch((error)=>{
        alert("Error message: ",error.message)
    })
}





export default function Profile(){
    function DownCSV(){
        if(typeof window !== "undefined"){
        const storage = getStorage();
        getDownloadURL(ref(storage, 'PLAS-5k/database/5000_final.csv')).then((urlt)=>{
            console.log(urlt);
            axios({
                url: urlt,
                method: 'GET',
                responseType: 'blob', // important
                onDownloadProgress: (progressEvent)=>{
                    setProgress2(Math.round((progressEvent.loaded*100)/progressEvent.total))
                },
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', '5000_final.csv');
                document.body.appendChild(link);
                link.click();
              });
        })
        }
    }
    function DownPDB(){
        if(typeof window !== "undefined"){
            const storage = getStorage();
            // trackPromise(
            getDownloadURL(ref(storage, 'PLAS-5k/database/input.7z')).then((urlt)=>{
                // const downloadFile= () =>{window.location.href=urlt};
                // return(<button onClick={downloadFile} download/>)
    
                // const xhr = new XMLHttpRequest();
                // xhr.responseType = 'blob';
                // xhr.onload = (event) => {
                // const blob = xhr.response;
                // };
                // xhr.open('GET', urlt);
                // xhr.send();
    
                console.log(urlt);
                axios({
                    url: urlt,
                    method: 'GET',
                    responseType: 'blob', // important
                    onDownloadProgress: (progressEvent)=>{
                        setProgress(Math.round((progressEvent.loaded*100)/progressEvent.total))
                    },
                }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'allPDB.7z');
                    document.body.appendChild(link);
                    link.click();
                  });
            })
            // );
        }
    }
    const [progress,setProgress] =useState(0);
    const [progress2, setProgress2] =useState(0);
    // const [binding, setBinding] = useState(require("/blank.csv"));
    useEffect(()=>{
        // const cors = require('cors')
        // app.use(cors())
        if(typeof window !== 'undefined'){
            const app =initializeApp(config);
            const auth = getAuth(app);
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
                        <h2>Download Database</h2>
                        <h5>The energatic components can be optained as a csv file and the initial structure as PDB file.</h5>
                    </header>
                    <section>
                            

                    <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column">
                        <Grid item>
                        </Grid>
                        <Grid item>
                            Please download all the data as a csv file by clicking <Button onClick={()=>{DownCSV()}}>here</Button>.
                            {progress2 >1 &&
                            <div style={{paddingLeft:'1rem'}}>Progress: {progress2}%</div>
                            }
                        </Grid>
                        <Grid item>
                            To download all the initial structures in pdb format click <Button onClick={()=>{DownPDB()}}>here</Button>.
                            {progress >1 &&
                            <div style={{paddingLeft:'1rem'}}>Progress: {progress}%</div>
                            }
                            <br/>
                            The above is a open 7z file with no password.
                        </Grid>
                        <Grid>
                            Wish to view the structure click <Link to="/app/viewer">here.</Link>
                        </Grid>
                    </Grid>
                    </section>
                </div>
            </div>
        </>
    );
}