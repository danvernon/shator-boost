import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Cart from "../components/Cart"
import { HeaderImageContainer, HeaderImg } from "../pages/index"

const CartPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        header: file(relativePath: { eq: "bgs/background-shadowlands.jpg" }) {
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

  const imageData = data.header.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Cart" />
      <HeaderImageContainer>
        <div className="content">
          <Container>
            <div className="woocommerce-product__wrapper">
              <h1>Cart</h1>
            </div>
          </Container>
        </div>
        <HeaderImg fluid={imageData} />
      </HeaderImageContainer>
      <Container>
        <Cart />
      </Container>
    </Layout>
  )
}

export default CartPage
