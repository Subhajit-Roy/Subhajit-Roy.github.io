import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"
import { Stage, StructureComponent } from "react-ngl"
import { Autocomplete, Checkbox, Grid, TextField } from "@mui/material"
import finalData from '../database/5000_final.json'
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { navigate } from "gatsby"
import { useEffect} from "react";
import config from "../service/fireconf"

export default function IndexPage(){
  useEffect(()=>{
    if(typeof window !== 'undefined'){
        const app =initializeApp(config);
        const auth = getAuth(app);
        onAuthStateChanged(auth, (user)=>{
            if(!user){
                navigate("/auth")
            }else{
                console.log(user.email);
            }
        })
    }
})
  const reprList = React.useMemo(() => ({
    'ball+stick': [{
      type: 'ball+stick',
      param:{
        color:'bfactor'
      }
    }],
    cartoon: [{
      type: 'cartoon',
      param:{
        color:'atomindex'
      }
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
  const [index, setIndex] = React.useState('');
  const [receptorState, setReceptorStae]= React.useState(true);
  const [ligandState, setLigandState]= React.useState(true);

  return(
    <Layout>
    <Seo title="Home" />
    <Helmet>
      {/* <script src={withPrefix('ngl.js')} type="text/javascript"/> */}
    </Helmet>
    <div style={{}}>
    <Autocomplete
      style={{paddingTop: '2rem'}}
      freeSolo
      id="pdbid"
      options={finalData.map((option)=>option.pdbid)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="PDB ID" sx={{
        '& .MuiInputBase-root':{
          color: 'white',
          borderColor: '#1C1D26',
          justifyContent: 'center',
        },
        '& .MuiInput-root':{
          border: 1,
          color:'white',
          borderColor: '#1C1D26'
        },
        '& MuiInputBase-input':{
          color: 'white',
        },
        '& .MuiInputLabel-root':{
          color:'white',
        },
        // '& ..MuiFormControl-root':{
        //   borderColor: '#1C1D26'
        // }
      }}/>}
      onChange={(event,newInputValue)=>{
        setInputValue(newInputValue);
        setIndex(finalData.findIndex(obj => obj.pdbid === newInputValue));
      }}
      // sx={{
      //   '& .MuiAutocomplete-input':{
      //     backgroundColor:"white"
      //   }
      // }}
    />
    </div>
    {/* <Stage width="600px" height="600px" cameraState={cameraState}>
      <Component path={"/pdb/"+inputValue+".pdb"} reprList={reprList}/>
    </Stage> */}
    {
      inputValue !== '' 
        ? <div>
          <Grid container spacing={4} direction="row">
            <Grid item>
              <Stage width="600px" height="600px" cameraState={cameraState}>
                <StructureComponent path={"/pdb/"+inputValue+".pdb"} reprList={reprList['ball+stick']} selection={ligandState ? 'Ligand' : 'not all'}/>
                <StructureComponent path={"/pdb/"+inputValue+".pdb"} reprList={reprList['cartoon']} selection={receptorState ? 'protein' : 'not all'}/>
              </Stage>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <h5>Receptor <Checkbox defaultChecked onChange={()=>{setReceptorStae(!receptorState)}}/></h5>
                </Grid>
                <Grid item>
                  <h5>Ligand <Checkbox defaultChecked onChange={()=>{setLigandState(!ligandState)}}/></h5>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing="auto" direction="column">
            <Grid item xs={2}>
              <h4><b>Binding Affinity:</b> {finalData[index]['di4_DELTA TOTAL_mean']}</h4>
            </Grid>
            <Grid item xs={2}>
              <h4><b>van der Waals Interaction Energy:</b> {finalData[index]['VDW']}</h4>
            </Grid>
            <Grid item xs="auto">
              <h4><b>Electrostatic Interaction Energy</b> {finalData[index]['di4_EEL_mean']}</h4>
            </Grid>
            <Grid>
              <h4><b>Non-Polar Interaction Energy</b> {finalData[index]['di4_EPB_mean']}</h4>
            </Grid>
          </Grid>
          </div>
        : <p></p>
    }
  </Layout>
  );
}