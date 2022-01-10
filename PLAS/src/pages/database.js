import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, navigate } from "gatsby"
import { Button, Grid } from "@mui/material";
import config from "../service/fireconf"
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import axios from "axios";
import Layout from "../components/layout";


function DownCSV(){
    if(typeof window !== "undefined"){
    const storage = getStorage();
    getDownloadURL(ref(storage, 'PLAS-5k/database/5000_final.csv')).then((urlt)=>{
        console.log(urlt);
        axios({
            url: urlt,
            method: 'GET',
            responseType: 'blob', // important
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
        getDownloadURL(ref(storage, 'PLAS-5k/database/input.7z')).then((urlt)=>{
            console.log(urlt);
            axios({
                url: urlt,
                method: 'GET',
                responseType: 'blob', // important
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'allPDB.7z');
                document.body.appendChild(link);
                link.click();
              });
        })
        }
}

export default function Profile(){
    const [name,setName] = useState("");
    const [uni,setUni] = useState("");
    const [everify,setEverify] = useState(false);
    const [sUrl,setSUrl] = useState("");
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
        <Layout>
            <Helmet>
                <title>PLAS: Download Database</title>
            </Helmet>
            <div id="main" className="wrapper style1">
                <div className="container">
                    <header className="major">
                        <h2>Database</h2>
                        <h5>Download the energatic component values in CSV format and the initial structures
                        in pdb format.</h5>
                    </header>
                    <section>


                    <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column">
                        <Grid item>
                        </Grid>
                        <Grid item>
                            Please download all the data as a csv file by clicking <Button onClick={()=>{DownCSV()}}>here</Button>.
                        </Grid>
                        <Grid item>
                            To download all the initial structures in pdb format click <Button onClick={()=>{DownPDB()}}>here</Button>.
                        </Grid>
                        <Grid>
                            Wish to view the structure click <Link to="/viewer">here.</Link>
                        </Grid>
                    </Grid>
                    </section>
                </div>
            </div>
        </Layout>
    );
}
