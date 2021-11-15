import { Grid, Tab, Tabs, Typography } from '@material-ui/core'
import { Box } from '@mui/system'
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import PropTypes from 'prop-types';
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
                    <h3 style={{}}>Sign IN</h3>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    Item Two
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
