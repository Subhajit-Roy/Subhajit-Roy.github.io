import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

export default function Query(){
    return(
        <Layout>
            <Helmet>
                <title>PLAS-5k: Query</title>
                <meta name='query'/>
            </Helmet>
            <div id='main' className='wrapper style1'>
                <div className='container'>
                    <header className='major'>
                        <h2>Query</h2>
                    </header>
                    For any general query fell free to reach out to any of the contributors/authors.
                    {/* For any technical details you may contact <a href='mailto:me.subhajitroy1999@gmail.com'> Subhajit Roy.</a> */}
                </div>
            </div>
        </Layout>
    )
}