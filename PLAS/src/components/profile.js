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
    const [name,setName] = useState("");
    const [uni,setUni] = useState("");
    const [everify,setEverify] = useState(false);
    const [sUrl,setSUrl] = useState("");
    const [progress,setProgress] =useState(0);
    const [progress2, setProgress2] =useState(0);
    // const [binding, setBinding] = useState(require("/blank.csv"));
    useEffect(()=>{
        // const cors = require('cors')
        // app.use(cors())
        if(typeof window !== 'undefined'){
            const app =initializeApp(config);
            const auth = getAuth(app);
            onAuthStateChanged(auth, (user)=>{
                if(!user){
                    navigate("/app/auth")
                }else{
                    console.log(user.email);
                    setName(user.displayName)
                    setUni(user.photoURL);
                    if(user.emailVerified){
                        setEverify(true);
                        // setBinding(require('/bindingFinal.csv'))
                    }
                }
            });
            // const storage = getStorage;
            // getDownloadURL(ref(storage, 'PLAS-5k/database/5000_final.csv')).then((url)=>{
            //     setSUrl(url);
            //     console.log(url);
            // }).catch((error)=>{
            //     alert('Error',error.message);
            // })
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
                            Password to open the above file is OpenMePLAS5k. The above is a 7z file.
                        </Grid>
                        <Grid>
                            Wish to view the structure click <Link to="/app/viewer">here.</Link>
                        </Grid>
                        </>}
                        <Grid item>
                            <Button variant="contained" onClick={()=>{LogOut()}}>Sign Out</Button>
                        </Grid>
                    </Grid>
                    </section>
                </div>
            </div>
        </>
    );
}