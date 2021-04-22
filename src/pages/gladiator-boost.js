import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import How from "../components/how"

import { HeaderImageContainer, HeaderImg } from "./index"

const GladiatorBoostPage = ({ location }) => {
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
      <SEO title="Gladiator Boost" />
      <HeaderImageContainer>
        <div className="content">
          <Container>
            <h1>Gladiator Boost</h1>
            <p>
              Gladiator title is the most prestige PVP title in world of
              warcraft it also will give you many benefits as well as a cool
              mount.
            </p>
          </Container>
        </div>
        <HeaderImg fluid={imageData} />
      </HeaderImageContainer>
      <Container>
        <Content>
          <ContentInner>
            <h2>Pilot</h2>
            <p>
              For the Pilot Gladiator boost Our booster will play on your
              account to get you Gladiator Title and mount.
            </p>
            <ContentInnerDetails>
              <DetailLink to="https://discord.gg/BAjygVC" target="_blank">
                Join Discord
              </DetailLink>
              <DetailPrice>€649.99</DetailPrice>
            </ContentInnerDetails>
            <h4>What is pilot gladiator boost?</h4>
            <h6>For this service we don’t offer refunds</h6>
            <p>
              Pilot gladiator boost has a lowered price since it is easier and
              faster for us to do it. There is an around 30% chance of getting
              banned even with precaution of using VPN. You should have that in
              mind when buying this type of boost since there will be no refund.
            </p>
            <h6>Are there any risks?</h6>
            <p>
              Yes there is a serious risk of getting banned and we aren’t like
              other boosting websites to tell you that Pilot boosts are safe,
              You should purchase this order only if you are 100% certain.
            </p>
            <h6>Account share</h6>
            <p>
              To receive the pilot gladiator boost we will need your account
              information so our booster would log in and play on it until he
              reaches Gladiator.
            </p>
          </ContentInner>
        </Content>
        <How />
      </Container>
    </Layout>
  )
}

export default GladiatorBoostPage

const Content = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  justify-content: center;
  padding-bottom: 25px;

  @media (min-width: 728px) {
    grid-gap: 50px;
    grid-template-columns: repeat(3, 400px);
    padding-bottom: 50px;
  }

  h4 {
    color: #cca63f;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 30px;
    text-transform: capitalize;
  }

  h6 {
    font-weight: 500;
    margin-bottom: 15px;
    margin-top: 20px;
  }

  p {
    opacity: 0.7;

    @media (min-width: 728px) {
      min-height: 100px;
    }
  }
`

const ContentInner = styled.div`
  @media (max-width: 728px) {
    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`

const ContentInnerDetails = styled.div`
  align-items: center;
  display: flex;
`

const DetailPrice = styled.span`
  color: rgb(244, 135, 51);
  font-size: 20px;
  font-weight: 600;
  margin-left: 20px;
`

const DetailLink = styled(Link)`
  align-items: center;
  background: #cb5e0b;
  border-radius: 20px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  display: flex;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  padding-top: 2px;
  transition: all ease-in-out 0.2s;
  width: 150px;

  &:hover {
    background: #b35309;
    color: #fff;
  }
`
