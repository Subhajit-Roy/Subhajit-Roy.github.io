import { alpha, Grid, Icon, styled, Tab, Tabs, TextField, Typography } from '@material-ui/core'
import { Box } from '@mui/system'
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import PropTypes from 'prop-types';
import pic from '../assets/images/g1.png';
// import pic02 from '../assets/images/pic02.jpg'
// import pic03 from '../assets/images/pic03.jpg'
// import pic04 from '../assets/images/pic04.jpg'
// import pic07 from '../assets/images/pic07.jpg'
// import pic08 from '../assets/images/pic08.jpg'



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


export default function Auth(props){
  const {classes} = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
                  <Tabs centered value={value} onChange={handleChange}>
                    <Tab label="Sign In" {...a11yProps(0)} />
                    <Tab label="Sign Up" {...a11yProps(1)}/>
                  </Tabs>
                  <TabPanel value={value} index={0}>
                    <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column">
                      <Grid item xs="auto">
                        <h3 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bolder'}}>Log In</h3>
                      </Grid>
                      <Grid item>
                        <SubhoTextField className="Email" variant="standard" label="E-mail" onChange={()=>{}} noborder 
                        style={{fontDisplay: 'white', display: 'flex', justifyContent: 'center',}}
                        color="secondary" 
                        />
                      </Grid>
                      <Grid item>
                        <SubhoTextField className="Password" type="password" label="Password" onChange={()=>{}}
                        style={{fontDisplay: 'white', display: 'flex', justifyContent: 'center',}}
                        color="secondary" 
                        />
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
                        <SubhoTextField className="Email" variant="standard" label="E-mail" onChange={()=>{}} noborder 
                        style={{fontDisplay: 'white', display: 'flex', justifyContent: 'center',}}
                        color="secondary" 
                        />
                      </Grid>
                      <Grid item>
                        <SubhoTextField className="Name" variant="standard" label="Name" onChange={()=>{}} noborder 
                        style={{fontDisplay: 'white', display: 'flex', justifyContent: 'center',}}
                        color="secondary" 
                        />
                      </Grid>
                      <Grid item>
                        <SubhoTextField className="Username" variant="standard" label="Username" onChange={()=>{}} noborder 
                        style={{fontDisplay: 'white', display: 'flex', justifyContent: 'center',}}
                        color="secondary" 
                        />
                      </Grid>
                      <Grid item>
                        <SubhoTextField className="Password" type="password" label="Password" onChange={()=>{}}
                        style={{fontDisplay: 'white', display: 'flex', justifyContent: 'center',}}
                        color="secondary" 
                        />
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
