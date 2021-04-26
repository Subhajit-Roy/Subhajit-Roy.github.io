import React from "react"
import { graphql } from "gatsby"

export default function postBody({ data }) {
  return (
    <div>
      <h1>This is subpage</h1>
    </div>
  )
}

// export const postQuery = graphql`
//   query($mdxPath: String!){
//     mdx(frontmattee: {})
//   }
// `
