import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react'

export default function Auth(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        <Button variant="contained">Submit</Button>
        </Stack>
        </div>
    );
}