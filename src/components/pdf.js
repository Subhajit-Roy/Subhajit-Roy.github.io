import React from "react"
import {Document, Page, pdfjs} from "react-pdf"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./pdftest.css"
import {Button, h3} from "bootstrap-react"
import { Component } from "react"

export default class Pdf1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
          width:  800,
          height: 182,
          pageNumber: 1,
          maxPage: 30,
          pdf: "",
        }
      }
    
      /**
       * Calculate & Update state of new dimensions
       */
      updateDimensions() {
        if (typeof window !== `undefined`) {
        if(window.innerWidth < 500) {
          this.setState({ width: 450, height: 102 });
        } else {
          let update_width  = window.innerWidth-100;
          let update_height = Math.round(update_width/4.4);
          this.setState({ width: update_width, height: update_height });
        }
      }
      }
    
      /**
       * Add event listener
       */
      componentDidMount() {
        pdfjs.GlobalWorkerOptions.workerSrc=`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        this.updateDimensions();
        if (typeof window !== `undefined`) {
        window.addEventListener("resize", this.updateDimensions.bind(this));
      }
    }
    
      /**
       * Remove event listener
       */
      componentWillUnmount() {
        if (typeof window !== `undefined`) {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
        }
      }

      nextPage(){
                if(this.state.pageNumber !== this.state.maxPage){
                    this.setState({pageNumber:this.state.pageNumber+1})
                    // setPageNumber(pageNumber+1);
                }
            }
        prevPage(){
                if(this.state.pageNumber !== 1){
                    this.setState({pageNumber:this.state.pageNumber-1})
                    // setPageNumber(pageNumber-1);
                }
            }
        onPDFLoad(Page){
            this.setState({maxPage:Page})
                // setMaxPage(Page);
            }

      render(){
          return(
            <>
         <div
                style={{
                  margin: `0 auto`,
                    // maxWidth: 960,
                    // padding: `0 1.0875rem 1.45rem`,
                    marginTop: '4em',
                }}>
                <Layout>
                    <SEO title="GATE Biotechnology 2020" />           
            
                    <div className="button" style={{display: "flex"}}>
                        <Button onClick={()=>this.prevPage()} className="prevButton mr-3">Previous  {this.state.pageNumber-1}</Button>
                        <h3>{this.state.pageNumber} of {this.state.maxPage}</h3>
                        <Button onClick={()=>this.nextPage()} className="nextButton ml-3" >Next   {this.state.pageNumber+1}</Button>    
                    </div>
                    <div style={{display: "flex"}}>
                    <Document file={require("../../public/storage/pdf/GATE/Bio2020.pdf")} onContextMenu={(e) => e.preventDefault()} className="pdf-document" onLoadSuccess={(pdf)=>this.onPDFLoad(pdf.numPages)} renderMode="canvas`">
                        <Page pageNumber={this.state.pageNumber} width={this.state.width}/>
                    </Document>
                    </div>
                    <div style={{display:"flex"}}>
                        <Button onClick={()=>this.nextPage()} className="buttonLast"> <h2>Next</h2></Button>
                    </div>
                </Layout>
            </div>
            </>
          )
      }
}