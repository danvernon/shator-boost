import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
// import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { HeaderImageContainer, HeaderImg } from "./index"

const CoachingPage = ({ location }) => {
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
      <SEO title="Coaching" />
      <HeaderImageContainer>
        <div className="content">
          <Container>
            <h1>Coaching</h1>
            <p>
              Would you want to learn from the best? If you want to improve your
              game in tactical sense we highly suggest you the coaching.
            </p>
          </Container>
        </div>
        <HeaderImg fluid={imageData} />
      </HeaderImageContainer>
    </Layout>
  )
}

export default CoachingPage

// const PageContainer = styled.div`
//   padding: 100px 0;
// `
