import { Button, Checkbox, Grid, Icon, styled, Tab, Tabs, TextField, Typography } from "@mui/material"
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import PropTypes from 'prop-types';
import config from "../service/fireconf"
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { Link, navigate } from "gatsby"
import { initializeApp } from "firebase/app"
// import "./auth.css"


if (typeof window !== 'undefined') {
  initializeApp(config);
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const SubhoTextField = styled((props)=>(
  <TextField InputProps ={{disableUnderline: true}}{...props}/>
))(({theme})=>({
  '& .MuiInputBase-root':{
    color: 'white',
    borderColor: '#1C1D26',
    border: 1,
    justifyContent: 'center',
  },
  '& .MuiInput-root':{
    border: 1,
    color:'white',
    borderColor: '#1C1D26'
  },
  '& MuiInputBase-input':{
    border:1,
    color: 'white',
    borderColor: '#1C1D26'
  },
  '& .MuiInputLabel-root':{
    color:'white',
    borderColor: '#1C1D26'
  },
  '& ..MuiFormControl-root':{
    borderColor: '#1C1D26'
  }
}))




TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function LogIn(username,password){
  if(typeof window !== 'undefined'){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      navigate('/app/profile')
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error:",errorMessage);
    });
  }
}

function SignUp(username,password,name,uni){
  if(typeof window !== 'undefined'){
    var auth = getAuth();
    createUserWithEmailAndPassword(auth,username,password).then((user)=>{
      console.log(user.user);
      updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:uni
      })
      signInWithEmailAndPassword(auth, username, password).then((user)=>{
        console.log("Signed In after sign Up");
        sendEmailVerification(auth.currentUser).then(()=>{
          console.log("Verification mail sent.");
          alert("Verification Email sent");
          navigate('/app/profile');
        })
      })
    }).catch((error)=>{
      console.log("Error Code:",error.code);
      console.log("Error Message:", error.message);
    })
  }

}

export default function Auth(props){
  // const {classes} = props;
  const [value, setValue] = React.useState(0);
  const [username,setUsername]= useState("");
  const [password,setPassword]=useState("");
  const [name,setName] = useState("");
  const [uni,setUni] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  useEffect(()=>{
    if(typeof window !== 'undefined'){
      const app =initializeApp(config);
      const auth = getAuth(app);
      onAuthStateChanged(auth, (user)=>{
          if(user){
              navigate("/app/profile")
          }else{
            console.log("Scope to login In")
          }
      })
    }
  })
  return(
    <Layout>
    <Helmet>
      <title>PLAS: Authentication</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Log In / Sign Up</h2>
        </header>

        <section>

          <div className="Auth Tab">
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs="auto">
                <Box sx={{width: 'auto', bgcolor: 'background.paper'}}>
                  <Tabs centered value={value} onChange={handleChange} textColor="white">
                    <Tab label="Sign In" {...a11yProps(0)} />
                    <Tab label="Sign Up" {...a11yProps(1)}/>
                  </Tabs>
                  <TabPanel value={value} index={0}>
                    <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column">
                      <Grid item xs="auto">
                        <h3 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder'}}>Log In</h3>
                      </Grid>
                      <Grid item>
                        <SubhoTextField className="Email" variant="standard" label="E-mail" onChange={(user)=>{setUsername(user.target.value)}} noborder 
                        style={{fontDisplay: 'white', display: 'flex', justifyContent: 'center',}}
                        color="secondary" 
                        />
                      </Grid>
                      <Grid item>
                        <SubhoTextField className="Password" type="password" label="Password" variant="standard" onChange={(user)=>{setPassword(user.target.value)}} noborder
                        style={{fontDisplay: 'white', display: 'flex', justifyContent: 'center',}}
                        color="secondary" 
                        />
                      </Grid>
                      <Grid item>
                        <Grid container>
                          <Grid item spacing={2}>
                            <Button variant="contained" endIcon={<Icon>login</Icon>} onClick={()=>{LogIn(username,password)}}>Sign IN</Button>
                          </Grid>
                          <Grid item spacing={2}>
                            <Button varient ="Outlined" color="secondary" startIcon={<Icon color="primary">delet_forever</Icon>}>Reset</Button>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <h4 style={{paddingTop: '3rem'}}>Third Party Authentication</h4>
                      </Grid>
                      <Grid container spacing={2} justifyContent="center" alignItems="center" direction='row' alignContent="center">
                        <Grid item xs="auto">
                          <Icon fontSize="large">facebook_rounded</Icon>
                        </Grid>

                        {/* <Grid item xs="auto"> */}
                          {/* <Icon fontSize="large">google_icon</Icon> */}
                          {/* <img src={pic} style={{maxWidth: '50h'}}/> */}
                        {/* </Grid> */}


                      </Grid>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column">
                      <Grid item xs="auto">
                        <h3 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder'}}>Sign Up</h3>
                      </Grid>
                      <Grid item>
                        <SubhoTextField className="Name" variant="standard" label="Name" onChange={(data)=>{setName(data.target.value)}} noborder 
                        style={{fontDisplay: 'white', display: 'flex', justifyContent: 'center',}}
                        color="secondary" 
                        />
                      </Grid>
                      <Grid item>
                        <SubhoTextField className="University" variant="standard" label="University" onChange={(data)=>{setUni(data.target.value)}} noborder 
                        style={{fontDisplay: 'white', display: 'flex', justifyContent: 'center',}}
                        color="secondary" 
                        />
                      </Grid>
                      <Grid item>
                        <SubhoTextField className="Email" variant="standard" label="E-mail" onChange={(user)=>{setUsername(user.target.value)}} noborder 
                        style={{fontDisplay: 'white', display: 'flex', justifyContent: 'center',}}
                        color="secondary" 
                        />
                      </Grid>
                      <Grid item>
                        <SubhoTextField className="Password" type="password" label="Password" onChange={(user)=>{setPassword(user.target.value)}}
                        style={{fontDisplay: 'white', display: 'flex', justifyContent: 'center',}}
                        color="secondary" variant="standard"
                        />
                      </Grid>
                      <Grid item>
                        {/* <FormGroup>
                          <FormControlLabel control={<Checkbox defaultChecked />} label={<div>I agree to the <Link to="/tc">terms and condition</Link> </div>}/>
                        </FormGroup> */}
                        <Checkbox defaultChecked disabled sx={{
                          '&.MuiButtonBase-root': {
                            color: "#E44C65",
                          },
                        }}/> I agree to the <Link to="/tc">terms and condition</Link>.
                        
                      </Grid>
                      <Grid item>
                        <Checkbox defaultChecked disabled sx={{
                          '&.MuiButtonBase-root': {
                            color: "#E44C65",
                          },
                        }}/> I agree to the <Link to="/license">liscence agreement.</Link>
                      </Grid>
                      <Grid item>
                        <Grid container>
                          <Grid item spacing={2}>
                            <Button variant="contained" endIcon={<Icon>login</Icon>} onClick={()=>{SignUp(username,password,name,uni)}}>Sign UP</Button>
                          </Grid>
                          <Grid item spacing={2}>
                            <Button varient ="Outlined" color="secondary" startIcon={<Icon color="primary">delet_forever</Icon>}>Reset</Button>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <h4 style={{paddingTop: '3rem'}}>Third Party Authentication</h4>
                      </Grid>
                      <Grid container spacing={2} justifyContent="center" alignItems="center" direction='row' alignContent="center">
                        <Grid item xs="auto">
                          <Icon fontSize="large">facebook_rounded</Icon>
                        </Grid>

                        {/* <Grid item xs="auto"> */}
                          {/* <Icon fontSize="large">google_icon</Icon> */}
                          {/* <img src={pic} style={{maxWidth: '50%'}}/> */}
                        {/* </Grid> */} 


                      </Grid>
                    </Grid>
                  </TabPanel>
                </Box>
              </Grid>
            </Grid>
          </div>


        </section>
      </div>
    </div>
  </Layout>
  );
}


// const Elements = props => (
  
// )

// export default Elements
