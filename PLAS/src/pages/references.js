import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic07 from '../assets/images/pic07.jpg'

const LeftSidebar = props => (
  <Layout>
    <Helmet>
      <title>PLAS-5k: References</title>
      <meta name="description" content="Right Sidebar Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>References</h2>
        </header>

        <section id="content" >
          <ol>
            <li>Refernce 1</li>
            <li>Refernce 2</li>
            <li>Refernce 3</li>
          </ol>
        </section>
      </div>
    </div>
  </Layout>
)

export default LeftSidebar
