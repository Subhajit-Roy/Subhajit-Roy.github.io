import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

const basicTemplate = props => {
  const {pageContext} = props;
  const {name} = pageContext;
  return(
    <div>
      <Helmet title={props.name}/>
      <h1>This is working</h1>
    </div>
  );
}
export default basicTemplate