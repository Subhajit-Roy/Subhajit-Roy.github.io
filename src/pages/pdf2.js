import React from "react"
import {Document, Page, pdfjs} from "react-pdf"

import Layout from "../components/layout"
import SEO from "../components/seo"
import gate from "../../public/storage/pdf/GATE/Bio2019.pdf"
import "./pdftest.css"
import { Component } from "react"
import {Button, h3} from "bootstrap-react"


pdfjs.GlobalWorkerOptions.workerSrc=`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const [maxPage, setNumPages] = useState(null)


export default class PdfTest extends Component{
    constructor(){
        super();
        this.state ={
            pageNumber: 1,
            maxPage: 20,
            width:800,
            height:1020
        }
    }
     /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = Math.round(update_width/4.4);
      this.setState({ width: update_width, height: update_height });
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
    nextPage(){
        if(this.state.pageNumber !== this.state.maxPage){
            this.setState({pageNumber:this.state.pageNumber+1})
        }
    }
    prevPage(){
        if(this.state.pageNumber !== 1){
            this.setState({pageNumber: this.state.pageNumber-1})
        }
    }
    onPDFLoad(Page){
        this.setState({maxPage:Page});
    }
    render(){
        return(
            <>
            <div
        style={{
        //   margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          marginTop: '4em',
        }}>
        <Layout>
            <SEO title="pdf Test" />           

            <div className="button" style={{display: "flex"}}>
                <Button onClick={()=>this.prevPage()} className="prevButton mr-3">Previous  {this.state.pageNumber-1}</Button>
                <h3>{this.state.pageNumber} of {this.state.maxPage}</h3>
                <Button onClick={()=>this.nextPage()} className="nextButton ml-3" >Next   {this.state.pageNumber+1}</Button>    
            </div>
            <Document file={gate} onContextMenu={(e) => e.preventDefault()} className="pdf-document" onLoadSuccess={(pdf)=>this.onPDFLoad(pdf.numPages)} renderMode="canvas`">
                <Page pageNumber={this.state.pageNumber} width={this.state.width}/>
            </Document>
            <div style={{display:"flex"}}>
                <Button onClick={()=>this.nextPage()} className="buttonLast"> <h2>Next</h2></Button>
            </div>
        </Layout>
    </div>
    </>
        );
    };
}

// export default PdfTest