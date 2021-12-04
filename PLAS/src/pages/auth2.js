import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
// import '../service/fire';
import firebase from '../service/fire';

export function onSubmit(email,pass){
    console.log(email);
    console.log(pass);
}

export default function Auth(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = () => getAuth(firebase);
    var user = auth.currentUser;
    if(user){
        console.log(user.uid);
    }else{
        console.log("Logged Out");
    }
    return(
        <div className="contain">
            <Stack spacing={2} direction="column">
            <TextField id="email" label="Email" variant="standard"
                style={{
                    color: 'white',
                    backgroundColor: 'white'
                }}
                onChange={(event)=>{setEmail(event.target.value)}}
            />
            <TextField
          id="pass"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          style={{
              color: "white",
              backgroundColor: "white",

          }}
          onChange={(event)=>{setPassword(event.target.value)}}
        />
        <Button variant="contained"
            onClick={()=>{onSubmit(email,password)}}>
            Submit</Button>
        </Stack>
        </div>
    );
}