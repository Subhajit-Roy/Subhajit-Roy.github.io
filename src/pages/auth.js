// import { makeStyles } from "@material-ui/core";
import React from "react"
// import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image";
import "./auth.css"
// import Layout from "../components/layout"


// const useStyle = makeStyles((theme)=>({
//     root:{
//         minHeight:"100vh",
//         maxHeight: "100vh",
//     },
// }))




export default function Auth(){
    // const classes = useStyle();

        const data = useStaticQuery(graphql`
            query {
                image1: file(relativePath: { eq: "img2.jpg" }) {
                ...squareImage
                }
                image2: file(relativePath: { eq: "img1.jpg" }){
                    ...squareImage
                }
            }
            `)
        const ImageData= data.image1.childImageSharp.fluid;
    return(
        <BackgroundImage fluid={ImageData} style={{minHeight: "100vh", maxHeight:"100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", alignItems: 'center', flexDirection:"row"}}>
            <div style={{display: 'flex', alignItems: 'center', backgroundColor: "transparent", height: "100vh", paddingTop:"3%", paddingLeft:"3%", paddingBottom:"3%"}}>
                <div style={{display: 'flex', backgroundColor: "white", height:"100%", width: "100%", borderRadius: "1.5%", padding: "3%", flexShrink:"20", justifyContent:"center", alignItems:"center"}}>
                    
                </div>
                {/* <div style={{width:"12%"}}/> */}
                <div style={{display:"flex",flexDirection: 'column', paddingLeft:"8%", width: "55%", justifyContent:"flex-start"}}>
                    <div style={{display:"flex",height: "80vh", justifyContent:"center", alignItems:"center"}}><h1 style={{color:"white"}}>This is a jklshnjkfhkshfikahsfjkhsikk</h1></div>
                    <div style={{display: "flex",alignSelf: "flex-end",flexDirection:"row"}}><h5 style={{color:"white"}}>
                            <a href="https://www.pexels.com/photo/hot-air-ballons-in-the-sky-2325446/">Background Image by Francesco Ungaro, from PEXELS</a>
                        </h5>
                        </div>
                </div>
                             
            </div>
        </BackgroundImage>
    )
}


