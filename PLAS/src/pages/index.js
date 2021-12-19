import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import One from '../components/One'
import Two from '../components/Two'
// import Three from '../components/Three'
// import Four from '../components/Four'
import Five from '../components/Five'
import config from "../service/fireconf";
import * as firebase from 'firebase/app';


if (typeof window !== 'undefined') {
    firebase.initializeApp(config);
  }

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="PLAS: Home"
          meta={[
            { name: 'description', content: 'Home Page' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>
        <Banner />
        <One />
        <Two />
        {/* <Three /> */}
        {/* <Four /> */}
        <Five />
      </Layout>
    )
  }
}

export default Home
