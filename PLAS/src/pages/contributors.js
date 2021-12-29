import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import data from "../database/contributors.json";
import data2 from "../database/author.json"
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

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
          <Typography variant="h2" color="primary" style={{paddingTop:'2rem', paddingBottom:'2rem'}}>
            Principal Investigator
          </Typography>
        </section>
        <section style={{paddingBottom:"5rem"}}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
            {data2.map((data)=>
            <Grid item xs='auto' md={6}>
            <Card sx={{ display: 'flex', maxWidth: 500, maxHeight: 500, borderRadius: '3%'}}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    {data.Name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {data.Affiliation}
                  </Typography>
                  <Typography variant="subtitle2" color="text.primary" component="div">
                    {data.Designation}
                  </Typography>
                  <Typography variant="caption" component="div">
                    {data.description}
                  </Typography>
                </CardContent>
              </Box>
              <CardActionArea
                sx={{maxWidth: 300,ml:'auto'}}
              >
                <CardMedia
                  component="img"
                  sx={{ maxWidth: 200,maxHeight:200,ml: 'auto'}}
                  image={data.picture_name}
                  alt="Image is not available try refreshing the page"
                />
              </CardActionArea>
            </Card>
            </Grid>)}
            </Grid>
            <hr/>
        </section>
        <section>
        <Typography variant="h2" color="primary" style={{paddingBottom:'2rem'}}>
          Contributors
        </Typography>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {/*<Grid item xs='auto' md={6}>
            <Card sx={{ display: 'flex', maxWidth: 500, maxHeight: 500, borderRadius: '3%'}}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Subhajit Roy ABC
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    CEBS
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
            </Grid>*/}
            {data.map((data)=>
            <Grid item xs='auto' md={6}>
            <Card sx={{ display: 'flex', maxWidth: 500, maxHeight: 500, borderRadius: '3%'}}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    {data.Name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {data.Affiliation}
                  </Typography>
                  <Typography variant="subtitle2" color="text.primary" component="div">
                    {data.Designation}
                  </Typography>
                  <Typography variant="caption" component="div">
                    {data.description}
                  </Typography>
                </CardContent>
              </Box>
              <CardActionArea
                sx={{maxWidth: 300,ml:'auto'}}
              >
                <CardMedia
                  component="img"
                  sx={{ maxWidth: 200,maxHeight:200,ml: 'auto'}}
                  image={"/"+data.picture_name}
                  alt="Image is not available try refreshing the page"
                />
              </CardActionArea>
            </Card>
            </Grid>)}
            </Grid>
        </section>
      </div>
    </div>
  </Layout>
)

export default Elements
