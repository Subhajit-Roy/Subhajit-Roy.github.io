import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"
import { Stage, StructureComponent } from "react-ngl"
import { Autocomplete, Checkbox, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import finalData from '../database/plas5k.json'
// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { navigate } from "gatsby"
// import { useEffect} from "react";
// import config from "../service/fireconf"
import Layout from "../components/layout";
// import MathJax from "react-mathjax";
// import { getDownloadURL, getStorage, ref } from "firebase/storage";




export default function IndexPage(){
  // function ObtainJSON(){
  //   if(typeof window !== 'undefined'){
  //     const storage = getStorage();
  //     getDownloadURL(ref(storage, "PLAS-5k/database/plas5k.json")).then((url)=>{
  //       fetch(url).then((response)=>response.json()).then((responseJSON)=>{
  //         setFinalData(responseJSON); 
  //         // console.log(responseJSON[0])
  //       });
  //     }).catch((error)=>{
  //       alert("Error in obtainint JSON");
  //     })
  //   }
  // }


//   useEffect(()=>{
//     if(typeof window !== 'undefined'){
//         const app =initializeApp(config);
//         const auth = getAuth(app);
//         onAuthStateChanged(auth, (user)=>{
//             if(!user){
//                 navigate("/auth")
//             }else{
//                 // console.log(user.email);
//                 // ObtainJSON();
//             }
//         })
//     }
// })
  const reprList = React.useMemo(() => ({
    'backgroundColor':"white",
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
  const [receptorState, setReceptorState]= React.useState(true);
  const [ligandState, setLigandState]= React.useState(true);
  const [pdburl,setPdburl] = React.useState("");
  // const [finalData,setFinalData] = React.useState([]);

  function PdbRequest(newInputValue){
    if (newInputValue.length !== null && newInputValue.length === 4){
      // if(typeof window !== 'undefined'){
      //   const storage = getStorage();
      //   getDownloadURL(ref(storage, "PLAS-5k/pdb/"+inputValue+".pdb")).then((url)=>{
      //     console.log(url)
      //     setPdburl(url);
      //   }).catch((error)=>{
      //     alert("Error",error.message);
      //   })
      // }
      setPdburl("/input/"+newInputValue+".pdb");
      setInputValue(newInputValue);
      setIndex(finalData.findIndex(obj => obj.pdbid === newInputValue));
      console.log(index);
    }
  }

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
      onChange={(event,newInputValue)=>PdbRequest(newInputValue)}
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
        ? <div id="main" className="wrapper style1">
          <Grid container spacing={4} direction="row">
            <Grid item>
              <Stage width="600px" height="600px" cameraState={cameraState}>
                <StructureComponent path={"/ligand/ligand-"+inputValue+".pdb"} reprList={reprList['ball+stick']} selection={ligandState ? 'all' : 'not all'}/>
                <StructureComponent path={"/protein/protein-"+inputValue+".pdb"} reprList={reprList['cartoon']} selection={receptorState ? 'all' : 'not all'}/>
              </Stage>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <h5>Receptor <Checkbox defaultChecked onChange={()=>{setReceptorState(!receptorState)}}/></h5>
                </Grid>
                <Grid item>
                  <h5>Ligand <Checkbox defaultChecked onChange={()=>{setLigandState(!ligandState)}}/></h5>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableCell align="left">{(finalData[index]['pdbid'])}</TableCell>
                    <TableCell align="right">Energy components(kcal/mol)</TableCell>
                  </TableHead>
                  <TableBody>
                    {/* <TableRow>
                      <TableCell align="left">Ligand RMSD</TableCell>
                      <TableCell align="right">{finalData[index]['LigandRmsdMean']} ({finalData[index]['LigandRmsdSd']})</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Protein RMSD</TableCell>
                      <TableCell align="right">{finalData[index]['ProteinRmsdMean']} ({finalData[index]['ProteinRmsdSd']})</TableCell>
                    </TableRow> */}
                    <TableRow>
                      <TableCell align="left">Binding Affinity</TableCell>
                      <TableCell align="right">{parseFloat(finalData[index]['binding_affinity']).toFixed(2)} </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">van der Walls Interaction</TableCell>
                      <TableCell align="right">{parseFloat(finalData[index]['vdW']).toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Electrostatic Interaction Energy</TableCell>
                      <TableCell align="right">{parseFloat(finalData[index]['electrostatic']).toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Polar Solvational Energy</TableCell>
                      <TableCell align="right">{parseFloat(finalData[index]['polar_solvation']).toFixed(2)} </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Non-Polar Solvational Energy</TableCell>
                      <TableCell align="right">{parseFloat(finalData[index]['non_polar_solvation']).toFixed(2)} </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          {/* <Grid container spacing="auto" direction="column">
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
          </Grid> */}
          </div>
        : <p></p>
    }
  </Layout>
  );
}