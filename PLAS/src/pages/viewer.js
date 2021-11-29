import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby-link"
import { Stage, StructureComponent } from "react-ngl"
import { Autocomplete, TextField } from "@mui/material"
import finalData from '../database/5000_final.json'



export default function IndexPage(){
  const reprList = React.useMemo(() => ({
    'ball+stick': [{
      type: 'ball+stick'
    }],
    cartoon: [{
      type: 'cartoon'
    }],
    'ribbon and line': [{
      type: 'ribbon',
      param: {
        color: 'atomindex'
      }
    }, {
      type: 'line',
      param: {
        color: 'element'
      }
    }],
    spacefill: [{
      type: 'spacefill',
      param: {
        color: 'element'
      }
    }],
    surface: [{
      type: 'surface',
      param: {
        color: 'element'
      }
    }]
  }), []);
  const cameraState = React.useMemo(()=>({
    Reset:{},
  }),[])

  const [inputValue, setInputValue] = React.useState('');
  return(
    <Layout>
    <Seo title="Home" />
    <Helmet>
      <script src={withPrefix('ngl.js')} type="text/javascript"/>
      <script src={withPrefix('script.js')} type="text/javascript"/>
    </Helmet>
    <Autocomplete
      freeSolo
      id="pdbid"
      options={finalData.map((option)=>option.pdbid)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="PDB ID"  />}
      onInputChange={(event,newInputValue)=>{
        setInputValue(newInputValue)
      }}
    />
    {/* <Stage width="600px" height="600px" cameraState={cameraState}>
      <Component path={"/pdb/"+inputValue+".pdb"} reprList={reprList}/>
    </Stage> */}
    {
      inputValue !== '' 
        ? <div>
        <Stage width="600px" height="600px" cameraState={cameraState}>
            <StructureComponent path={"/pdb/"+inputValue+".pdb"} reprList={reprList['ball+stick']} selection="Ligand"/>
            <StructureComponent path={"/pdb/"+inputValue+".pdb"} reprList={reprList['cartoon']} selection="protein"/>
          </Stage>
          </div>
        : <p></p>
    }
  </Layout>
  );
}