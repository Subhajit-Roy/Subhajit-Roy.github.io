import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic07 from '../assets/images/pic07.jpg'
import pic08 from '../assets/images/pic08.jpg'
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { borderRight, Box } from '@mui/system'

const Elements = props => (
  <Layout>
    <Helmet>
      <title>Contributors: PLAS</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Contributors</h2>
          <p>
            "The great contributors in life are those who, though afraid of the knock at the door, still answer it."
            <br/>
            <span style={{display: 'flex', justifyContent: 'right'}}>-Stphen Covey</span>
          </p>
        </header>
        <section>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs='auto' md={6}>
            <Card sx={{ display: 'flex', maxWidth: 500, maxHeight: 500, borderRadius: '3%'}}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Subhajit Roy ABCD
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Mac Miller
                  </Typography>
                </CardContent>
              </Box>
              <CardActionArea
                sx={{maxWidth: 300,ml:'auto'}}
              >
                <CardMedia
                  component="img"
                  sx={{ maxWidth: 300,ml: 'auto'}}
                  image={pic03}
                  alt="Live from space album cover"
                />
              </CardActionArea>
            </Card>
            </Grid>

            <Grid item xs='auto' md={6}>
            <Card sx={{ display: 'flex', maxWidth: 500, maxHeight: 500, borderRadius: '3%'}}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Subhajit Roy
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Mac Miller
                  </Typography>
                </CardContent>
              </Box>
              <CardActionArea
                sx={{maxWidth: 300,ml:'auto'}}
              >
                <CardMedia
                  component="img"
                  sx={{ maxWidth: 300,ml: 'auto'}}
                  image={pic03}
                  alt="Live from space album cover"
                />
              </CardActionArea>
            </Card>
            </Grid>
            </Grid>
        </section>
      </div>
    </div>
  </Layout>
)

export default Elements
