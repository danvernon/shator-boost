import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location }) => {
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
        gladiatorBoost: file(
          relativePath: { eq: "products/gladiator-boost.png" }
        ) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        coaching: file(relativePath: { eq: "products/coaching.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        arenaRating: file(relativePath: { eq: "products/arena-rating.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        visiousSaddle: file(
          relativePath: { eq: "products/vicious-saddle.png" }
        ) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        rankOne: file(relativePath: { eq: "products/rank-one.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )

  const siteTitle = data.site.siteMetadata.title
  const imageData = data.header.childImageSharp.fluid
  const imgGladiatorBoost = data.gladiatorBoost.childImageSharp.fluid
  const imgCoaching = data.coaching.childImageSharp.fluid
  const imgArenaRating = data.arenaRating.childImageSharp.fluid
  const imgVisiousSaddle = data.visiousSaddle.childImageSharp.fluid
  const imgRankOne = data.rankOne.childImageSharp.fluid

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Elite WoW Boost" />
      <HeaderImageContainer>
        <div className="content">
          <Container>
            <h1>Shator Boost</h1>
            <p>
              Our team consists of Multi Rank 1 Gladiators, Tournament players
              and Blizzcon Winner that have been successfully boosting since
              2008.
            </p>
            <br />
            <p>
              Our goal is very simple, we are here to get you to your dream
              rating in World of Warcraft in a quick and efficient manner. Save
              yourself from the countless hours of grinding, and let our pro’s
              help you.
            </p>
          </Container>
        </div>
        <HeaderImg fluid={imageData} />
      </HeaderImageContainer>
      <Container>
        <Box>
          <BoxText className="text">
            <h3>Gladiator Boost</h3>
            <p>
              Gladiator title is the most prestige PVP title in world of
              warcraft it also will give you many benefits as well as a cool
              mount.
            </p>
            <span>Starts from 399.99€</span>
            <DetailLink to="/gladiator-boost">See details</DetailLink>
          </BoxText>
          <BoxImage className="image">
            <Img fluid={imgGladiatorBoost} />
          </BoxImage>
        </Box>
        <Box>
          <BoxText className="text">
            <h3>Coaching</h3>
            <p>
              Would you want to learn from the best? If you want to improve your
              game in tactical sense we highly suggest you the coaching.
            </p>
            <span>Starts from 23€</span>
            <DetailLink to="/coaching">See details</DetailLink>
          </BoxText>
          <BoxImage className="image" style={{ maxWidth: 300 }}>
            <Img fluid={imgCoaching} />
          </BoxImage>
        </Box>
        <Box>
          <BoxText className="text">
            <h3>Arena Rating</h3>
            <p>
              Our boosters are able to get you to the rating you always dreamt
              about. You can play with the booster (Selfplay boost) or let the
              booster play on your account (Pilot boost).
            </p>
            <span>Starts from 42€</span>
            <DetailLink to="/arena-rating">See details</DetailLink>
          </BoxText>
          <BoxImage className="image" style={{ maxWidth: 350 }}>
            <Img fluid={imgArenaRating} />
          </BoxImage>
        </Box>
        <Box>
          <BoxText className="text">
            <h3>Visious Saddle</h3>
            <p>
              There are great deal of other benefits that you can get by buying
              this service instead of just getting the tokens click on button to
              learn more.
            </p>
            <span>Starts from 129€</span>
            <DetailLink to="/visious-saddle">See details</DetailLink>
          </BoxText>
          <BoxImage className="image" style={{ maxWidth: 350 }}>
            <Img fluid={imgVisiousSaddle} />
          </BoxImage>
        </Box>
        <Box>
          <BoxText className="text">
            <h3>Rank One</h3>
            <p>
              Our boosters are able to get you to the rating you always dreamt
              about. You can play with the booster (Selfplay boost) or let the
              booster play on your account (Pilot boost).
            </p>
            <span>Starts from 1999€</span>
            <DetailLink to="/rank-one">See details</DetailLink>
          </BoxText>
          <BoxImage className="image" style={{ maxWidth: 350 }}>
            <Img fluid={imgRankOne} />
          </BoxImage>
        </Box>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const HeaderImageContainer = styled.div`
  align-items: center;
  box-shadow: 0 1px 5px 0 #4a4a4a;
  display: flex;
  height: 400px;
  justify-content: center;
  margin-bottom: 50px;
  position: relative;

  .content {
    position: relative;
    text-align: center;
    z-index: 1;

    h1 {
      margin-bottom; 20px;
      margin-top: 0;
      text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }

    h2 {
      font-weight: 500;
      margin-top: 0;
    }

    p {
      font-size: 15px;
      margin: 0 auto;
      max-width: 600px;
      opacity: 0.9;
    }
  }
`

export const HeaderImg = styled(Img)`
  bottom: 0;
  left: 0;
  max-height: 400px;
  position: absolute !important;
  right: 0;
  opacity: 0.2;
  top: 0;
`

const Box = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  max-width: 800px;
  padding: 50px 0;

  &:nth-child(even) {
    .text {
      order: 1;
    }

    .image {
      order: 0;
    }
  }
`

const BoxText = styled.div`
  h3 {
    font-weight: 600;
  }

  p {
    margin-bottom: 15px;
    opacity: 0.8;
  }

  span {
    color: #f48733;
    display: block;
    font-weight: 600;
    margin-bottom: 20px;
  }
`

const BoxImage = styled.div``

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
