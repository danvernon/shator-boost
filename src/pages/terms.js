import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { HeaderImageContainer, HeaderImg } from "./index"

const TermsPage = ({ location }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        wpPage(slug: { eq: "terms-of-service" }) {
          id
          title
          content
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
  const page = data.wpPage

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={page.title} />
      <HeaderImageContainer>
        <div className="content">
          <Container>
            <h1>{page.title}</h1>
            <p>Please find our Terms of Service below.</p>
          </Container>
        </div>
        <HeaderImg fluid={imageData} />
      </HeaderImageContainer>
      <Container>
        <Content
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            margin: "0 auto 30px",
            maxWidth: 600,
            paddingBottom: 30,
          }}
          className="woocommerce-product__description"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </Container>
    </Layout>
  )
}

export default TermsPage

// const PageContainer = styled.div`
//   padding: 100px 0;
// `

const Content = styled.div`
  p {
    opacity: 0.7;
  }
`
