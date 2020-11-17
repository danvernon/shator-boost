import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
// import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { HeaderImageContainer, HeaderImg } from "./index"

const PrivacyPage = ({ location }) => {
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
      <SEO title="Privacy Policy" />
      <HeaderImageContainer>
        <div className="content">
          <Container>
            <h1>Privacy Policy</h1>
            <p>
              Shator-boost.com customers and guests who visits
              “Shator-boost.com” website personal data is very important for us.
              Any changes in our privacy policy would be shown at
              “Shator-boost.com” and they will be valid once they appear. IF
              Customer use our service it means that he automatically agrees
              with this rules.
            </p>
          </Container>
        </div>
        <HeaderImg fluid={imageData} />
      </HeaderImageContainer>
    </Layout>
  )
}

export default PrivacyPage

// const PageContainer = styled.div`
//   padding: 100px 0;
// `
