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
            <h2>Selfplay</h2>
            <p>
              This is the safest option to choose Our booster/s will play with
              you until you get your Gladiator title and Gladiator mount.
            </p>
            <DetailLink to="https://discord.gg/jNFDjzx" target="_blank">
              Join Discord
            </DetailLink>
            <h4>What is selfplay gladiator boost?</h4>
            <h6>No risk at all</h6>
            <p>
              We guarantee that there won’t be any risk when buying selfplay
              gladiator boost. It is 100% safe since you are playing on your own
              account with the booster/s.
            </p>
            <h6>Benefits of selfplay boost</h6>
            <p>
              You will be able to learn a lot from our booster. Adapting to
              their gameplay and the strategies will make you a much better
              player and you will be more satisfied when buying the Gladiator
              boost. You will be playing with professionals that will be
              patient.
            </p>
            <h6>Requirements</h6>
            <p>
              To buy selfplay gladiator boost you should contact us on the
              discord. Simply click on the button below the selfplay gladiator
              boost to join our discord server where you will be contacted by
              our manager.
            </p>
          </ContentInner>
          <ContentInner>
            <h2>Pilot</h2>
            <p>
              For the Pilot Gladiator boost Our booster will play on your
              account to get you Gladiator Title and mount.
            </p>
            <DetailLink to="https://discord.gg/jNFDjzx" target="_blank">
              Join Discord
            </DetailLink>
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
          <ContentInner>
            <h2>Account</h2>
            <p>
              Our booster will create a completely new account. He will play on
              that account until he reaches Gladiator. Once the order is
              finished you will receive account info.
            </p>
            <DetailLink to="/gladiator-account">Buy Now</DetailLink>
            <h4>What is gladiator account boost?</h4>
            <h6>Risk of getting banned</h6>
            <p>
              There is a risk of getting banned even for gladiator account
              boost. Although it is lower chance then on pilot gladiator boost
              it is still a chance and there won’t be any refund in case the
              account gets banned.
            </p>
            <h6>Customization</h6>
            <p>You will be able to choose the character’s race, class etc..</p>
            <h6>No Requirements</h6>
            <p>
              You can simply buy through our website. Once you make the payment
              and fill the info on the checkout page we will contact you on
              discord.
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
  }
`

const ContentInner = styled.div`
  @media (max-width: 728px) {
    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
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
