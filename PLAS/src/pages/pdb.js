import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic07 from '../assets/images/pic07.jpg'
import { withPrefix } from 'gatsby-link'

export default function pdb(props){
  return(
    <div>
      <Helmet>
        <title>Right Sidebar - Landed by HTML5 UP</title>
        <meta name="description" content="Right Sidebar Page" />
        <script src={withPrefix('ngl.js')} type="text/javascript" />
        {/* <script src={withPrefix('script.js')} type="text/javascript" /> */}
        <script
    dangerouslySetInnerHTML={{
      __html: `
              var name = 'world';
              console.log('Hello ' + name);
          `,
    }}
  />
      </Helmet>
  
      <div id="main" className="wrapper style1">
        <div className="container">
          <header className="major">
            <h2>No Sidebar</h2>
            <p>
              Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
              accumsan
            </p>
          </header>
  
          <section id="content">
          <div id="viewport" style={{height: "100%",width: "100%"}}></div>
          
          </section>
        </div>
      </div>
    </div>
  )
}