import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
// import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { HeaderImageContainer, HeaderImg } from "./index"

const FaqPage = ({ location }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        header: file(relativePath: { eq: "bgs/background-maldraxus.jpg" }) {
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
      <SEO title="FAQ" />
      <HeaderImageContainer>
        <div className="content">
          <Container>
            <h1>FAQ</h1>
            <p>Check out the frequently asked questions below.</p>
          </Container>
        </div>
        <HeaderImg fluid={imageData} />
      </HeaderImageContainer>
    </Layout>
  )
}

export default FaqPage

// const PageContainer = styled.div`
//   padding: 100px 0;
// `
