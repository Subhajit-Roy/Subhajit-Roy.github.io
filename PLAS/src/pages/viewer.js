import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby-link"
import { Component, Stage } from "react-ngl"



export default function IndexPage(){
  const reprList = React.useMemo(()=>
    [{
      type: 'cartoon'
    }],[]
  );
  return(
    <Layout>
    <Seo title="Home" />
    <Helmet>
      <script src={withPrefix('ngl.js')} type="text/javascript"/>
      <script src={withPrefix('script.js')} type="text/javascript"/>
    </Helmet>
    <Stage width="600px" height="600px">
      <Component path="/pdb/1po1.pdb" reprList={reprList}/>
    </Stage>
  </Layout>
  );
}

