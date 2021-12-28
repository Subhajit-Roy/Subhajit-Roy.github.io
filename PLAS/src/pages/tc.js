import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

export default function TermsAndCondition(){
    return(
        <Layout>
            <Helmet>
                <title>PLAS-5k: Terms and Conditions</title>
                <meta name="tc" content='Terms and condition'/>
            </Helmet>
            <div id="main" className="wrapper style1">
            <div className="container">
            <header className="major">
                <h2>Terms and Conditions</h2>
            </header>
            <section>
                <h4>The database is copyrighted under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).</a>
                The complete license agreement can be obtained from <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode'>here</a>.
                
                </h4>

            </section>
            </div>
            </div>
        </Layout>
    )
}