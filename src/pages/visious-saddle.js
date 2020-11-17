import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
// import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { HeaderImageContainer, HeaderImg } from "./index"

const VisiousSaddlePage = ({ location }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        header: file(relativePath: { eq: "bgs/background-revendreth.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 1600, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )
  const siteTitle = data.site.siteMetadata.title
  const imageData = data.header.childImageSharp.fluid

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Visious Saddle" />
      <HeaderImageContainer>
        <div className="content">
          <Container>
            <h1>Visious Saddle</h1>
            <p>
              There are great deal of other benefits that you can get by buying
              this service instead of just getting the tokens click on button to
              learn more.
            </p>
          </Container>
        </div>
        <HeaderImg fluid={imageData} />
      </HeaderImageContainer>
    </Layout>
  )
}

export default VisiousSaddlePage

// const PageContainer = styled.div`
//   padding: 100px 0;
// `
