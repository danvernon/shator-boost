import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import styled from "styled-components"

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
  const imageData = data.header.childImageSharp.fluid

  return (
    <Layout location={location} title={"Privacy"}>
      <SEO title={"Privacy"} />
      <HeaderImageContainer>
        <div className="content">
          <Container>
            <h1>Privacy</h1>
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
      <Container>
        <Content>
          <h2>Who we are</h2>
          <p>Our website address is: https://www.shator-boost.com</p>
          <h2>What personal data we collect and why we collect it</h2>
          <p>
            Shator-boost.com customers and guests who visits “Shator-boost.com”
            website personal data is very important for us . Any changes in our
            privacy policy would be shown at “Shator-boost.com” and they will be
            valid once they appear. IF Customer use our service it means that he
            automatically agrees with this rules.
          </p>
          <h3>
            <strong>Gathering and collecting personal information</strong>
          </h3>
          <p>
            Website “Shator-boost.com” gathers and stores personal information
            only for completion of orders and informing our customers about
            policy changes and discounts.
            <br />
            You will be informed using your personal data only after you agree
            to it.
          </p>
          <h3>
            <strong>Usage of personal data</strong>
          </h3>
          <p>We can use your personal data for the following:</p>
          <ul>
            <li>Informing you about your order details</li>
            <li>Improving quality of the service and overall performance.</li>
            <li>
              Sending you information about changes at our website, with option
              to disable it.
            </li>
          </ul>
          <h3>
            <strong>Protection of your personal data</strong>
          </h3>
          <p>We use following methods to protect your data:</p>
          <ul>
            <li>
              SSL encrypting protocol, which we use to protect your personal
              data.
            </li>
            <li>
              All data about your credit card goes through such payment systems
              as paypal, NOT directly to us.
            </li>
            <li>
              All required security methods are applied to our hosting. Server
              is regularly checked for any viruses and bugs.
            </li>
            <li>
              All emails, discords are secured by our database, and can only be
              accessed by administration of Shator-boost.com.
            </li>
          </ul>
        </Content>
      </Container>
    </Layout>
  )
}

export default PrivacyPage

// const PageContainer = styled.div`
//   padding: 100px 0;
// `

const Content = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 auto 30px;
  max-width: 600px;
  padding-bottom: 30px;

  a {
    color: #fff;
    text-decoration: underline;

    &:hover {
      color: #fff;
    }
  }

  p {
    opacity: 0.7;
  }
`
