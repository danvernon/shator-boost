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
            <span>Starts from €449.99</span>
            <DetailLink to="/gladiator-account">See details</DetailLink>
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
            <span>Starts from €39</span>
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
            <span>Starts from €48.99</span>
            <DetailLink to="/arena-rating">See details</DetailLink>
          </BoxText>
          <BoxImage className="image" style={{ maxWidth: 350 }}>
            <Img fluid={imgArenaRating} />
          </BoxImage>
        </Box>
        <Box>
          <BoxText className="text">
            <h3>Vicious Saddle</h3>
            <p>
              There are great deal of other benefits that you can get by buying
              this service instead of just getting the tokens click on button to
              learn more.
            </p>
            <span>Starts from €129</span>
            <DetailLink to="/vicious-saddle-prod">See details</DetailLink>
          </BoxText>
          <BoxImage className="image" style={{ maxWidth: 350 }}>
            <Img fluid={imgVisiousSaddle} />
          </BoxImage>
        </Box>
        <Box>
          <BoxText className="text">
            <h3>Rated Battlegrounds</h3>
            <p>
              Rated Battlegrounds With the Shator Boost you have the best
              battlefield team in Europe at your side. We shorten your path to
              success. No matter if your goals in battlegrounds are the
              achievements Hero of the Alliance or Hero of the Horde, we make
              your dream come true with a quick boosting. With our German
              coaches you can easily refresh your battleground tactics. In
              Selfplay or Accplay you can earn Loot, PvP Gear and titles.
            </p>
            <span>Starts from €43.99</span>
            <DetailLink to="/rated-battlegrounds">See details</DetailLink>
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
  min-height: 200px;
  justify-content: center;
  margin-bottom: 50px;
  padding: 50px 0;
  position: relative;

  @media (min-width: 728px) {
    min-height: 300px;
  }

  .content {
    position: relative;
    text-align: center;
    z-index: 1;

    h1 {
      margin-bottom: 20px;
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

    .woocommerce-product__price {
      margin-bottom: 15px;
      margin-top: 15px;

      span {
        font-size: 20px;
        font-weight: 800;
      }
    }

    button {
      margin: 0 auto;
      width: 150px;
    }
  }
`

export const HeaderImg = styled(Img)`
  bottom: 0;
  left: 0;
  /* max-height: 400px; */
  position: absolute !important;
  right: 0;
  opacity: 0.2;
  top: 0;
`

const Box = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 50px;
  margin: 0 auto;
  max-width: 800px;
  padding: 25px 0;

  @media (min-width: 728px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 50px 0;
  }

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
  @media (max-width: 728px) {
    order: 2;
    text-align: center;

    a {
      margin: 0 auto;
    }
  }

  h3 {
    font-weight: 600;

    @media (max-width: 728px) {
      margin: 0;
    }
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
