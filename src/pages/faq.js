import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import styled from "styled-components"

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

  const imageData = data.header.childImageSharp.fluid

  return (
    <Layout location={location} title={"FAQ"}>
      <SEO title={"FAQ"} />
      <HeaderImageContainer>
        <div className="content">
          <Container>
            <h1>FAQ</h1>
            <p>Check out the frequently asked questions below.</p>
          </Container>
        </div>
        <HeaderImg fluid={imageData} />
      </HeaderImageContainer>
      <Container>
        <Content>
          <h2>Why us?</h2>
          <p>
            We have the best boosters working for us. People who have been
            boosting from the first WoW exapansions such as TBC and Wotlk and
            they have achieved multiple rank one.
          </p>
          <h2>Contact us</h2>
          <p>You can contact us on the live chat or on discord Shator#6666</p>

          <h2>Will my account be secured?</h2>
          <p>
            We will take very secure way to minimize the risk of the ban in case
            you are buying pilot or account service. We will be using VPN of
            your city, we won’t ever mention boosting as well talking to your
            friends. Although the risk of the ban will always be there for the
            services that are mentioned.
          </p>

          <h2>What is your refund policy?</h2>
          <p>
            We do not offer refunds for the services such as Pilot and account
            boosts since there is no way to fully secure it, if someone is
            telling you otherwise they are lying. There is around 30% chance of
            getting banned. For the selfplay services we offer the refund if the
            fault was on our side such as failing to deliver on time.
          </p>

          <h2>Can i play on my account during the boost?</h2>
          <p>
            If you choose selfplay boost then yes you will be able to play on
            your account compared to pilot boost in which you will need to give
            the account info to our booster for him to complete the order.
          </p>

          <h2>After i pay what do i do?</h2>
          <p>
            We will contact you on discord as soon as possible and assign the
            booster to you.
          </p>
        </Content>
      </Container>
    </Layout>
  )
}

export default FaqPage

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
