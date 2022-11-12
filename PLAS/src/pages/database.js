import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { Link, navigate } from "gatsby"
import { Button, Grid } from "@mui/material";




export default class Database extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="PLAS: Database"
          meta={[
            { name: 'description', content: 'PLAS: Database' },
            { name: 'keywords', content: 'database' },
          ]}
        ></Helmet>
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
                            Please download all the data as a csv file by clicking <Button onClick={()=>{navigate("https://doi.org/10.6084/m9.figshare.19069604")}}>here</Button>.
                        </Grid>
                        <Grid item>
                            To download all the initial structures in pdb format click <Button onClick={()=>{navigate("https://doi.org/10.6084/m9.figshare.19069595")}}>here</Button>
                            <br/><br/><br/>
                            The above is a 7zip archive, you might need to install 7zip to unpack.
                        </Grid>
                        <Grid>
                            Wish to view the structure click <Link to="/viewer">here.</Link>
                        </Grid>
                    </Grid>
                    </section>
                </div>
            </div>
      </Layout>
    )
  }
}
