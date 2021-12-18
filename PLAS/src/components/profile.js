import React from "react";
import { Helmet } from "react-helmet";

export default function Profile(){
    return(
        <>
            <Helmet>
                <title>PLAS: Profile</title>
            </Helmet>
            <div id="main" className="wrapper style1">
                <div className="container">
                    <header className="major">
                        <h2>Profile Name</h2>
                    </header>

                    <section>
                        <div className="downloadRawCSV">
                            Please download all the data as a csv file by clicking <a>here</a>.
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}