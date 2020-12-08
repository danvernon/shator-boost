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
    <Layout location={location} title={"Terms of Service"}>
      <SEO title={"Terms of Service"} />
      <HeaderImageContainer>
        <div className="content">
          <Container>
            <h1>{"Terms of Service"}</h1>
            <p>Please find our Terms of Service below.</p>
          </Container>
        </div>
        <HeaderImg fluid={imageData} />
      </HeaderImageContainer>
      <Container>
        <Content>
          <h2>
            <strong>The Agreement</strong>
          </h2>

          <p>
            The current Agreement regulates the relations between a Client and
            an Agent regarding the mediation services provided by the Agent. By
            placing an order accordingly to the Agreement, the Client confirms
            his approval and acceptance of the Terms of Agreement.
          </p>

          <ol>
            <li>Basic concepts:</li>
          </ol>

          <p>
            1.1.&nbsp;<strong>Agent</strong>&nbsp;—&nbsp;
            <strong>Shator-boost.com</strong>&nbsp;online store, which provides
            its customers with mediation services according to the Agreement;
          </p>

          <p>
            1.2.&nbsp;<strong>Client</strong>&nbsp;— an individual interested in
            purchasing of mediation services;
          </p>

          <p>
            1.3.&nbsp;<strong>Mediation services</strong>&nbsp;— Actions
            performed by the Agent under its own name, but paid by the Client,
            to set proper interaction between the Client and the Players, who
            provide the Client with their service in an online game;
          </p>

          <p>
            1.4.&nbsp;<strong>Game</strong>&nbsp;— an interactive online PC
            game;
          </p>

          <p>
            1.5.&nbsp;<strong>Player</strong>&nbsp;— an individual involved into
            the gaming process;
          </p>

          <p>
            1.6.&nbsp;<strong>In-game object</strong>&nbsp;— game account, game
            resource, game item;
          </p>

          <p>
            1.7.&nbsp;<strong>Game account</strong>&nbsp;— the account which
            includes all data about the player, his in-game character and his
            progress in the game;
          </p>

          <p>
            1.8.&nbsp;<strong>Game resource</strong>&nbsp;— in-game currency
            (gold, coins, rubles, mana etc.), acknowledged as a measure of value
            and progress in the game;
          </p>

          <p>
            1.9.&nbsp;<strong>In-game item</strong>&nbsp;— in-game weapons,
            armor, clothes, artifacts and other items used in the game;
          </p>

          <p>
            1.11.&nbsp;<strong>Agent’s site</strong>&nbsp;— Agent’s website,
            hosted on a domain&nbsp;
            <strong>
              Shator-boost.com
              <br />
            </strong>
          </p>

          <ol start="2">
            <li>The method of placing an order and obtainment of services.</li>
          </ol>

          <p>
            2.1. The Client is obliged to carefully examine the Agreement and
            other rules and instructions, concerning the mediation services
            provided by the Agent (they are published on Agent’s site).
          </p>

          <p>
            2.2. To place an order the Client chooses the required service using
            a special webform on Agent’s site and fills all fields that are
            specified as necessary. These fields include the vital information
            needed to proceed with the deal that is made between the Client, the
            Agent and the Players. The Agent may change the specified terms only
            if that doesn’t prejudice any of the Client’s interests and doesn’t
            bring any extra expenses to him.
          </p>

          <p>
            Considering the terms that were not discussed with the Client, the
            Agent may act upon his own discretion.
          </p>

          <p>
            2.3. By sending the filled form to the Agent, the Client gives
            unconditional agreement on total compliance of the Agreement and
            other conditions of the deal, which were chosen by the Client in the
            web-form (nature and size of the services etc.), because the Agent
            will make a deal with third parties to fullfil the Agreement.
          </p>

          <p>
            2.4. After sending the webform, the Client makes payment according
            to the specified rate. The specified sum is sent by the Agent to pay
            for the services of the player to complete the deal in the interests
            of the Client, and also includes Agent’s reward according to the
            Agreement.
          </p>

          <p>
            2.5. The payment can be made using any of the specified on Agent’s
            site options. Both parties can pick another payment option upon
            consensual agreement.
          </p>

          <p>
            2.6. The Agent is obliged to complete the necessary actions to
            fulfill the Agreement in reasonable terms. Usually the Agent
            specifies default completion time for specific order on Agent’s
            site.
          </p>

          <p>
            2.7. The Client may ask the Agent to make a deal with the Player to
            commit the actions, leading to handing an in-game object to the
            Client or boosting the Client’s character, or for any other purposes
            specified on the Agent’s site.
          </p>

          <p>
            2.8. In case of ordering mediation services concerning character
            boosting,the Client is obliged to pass all necessary information to
            the Agent (Game Account details needed to log into the game and play
            the corresponding character). The Client understands and agrees that
            this information will be passed by the Agent to the third party
            found by the Agent to perform the character boosting. The Client is
            obliged not to log into his account without asking the Agent and/or
            against the instructions received by the Agent from the third party.
          </p>

          <p>
            2.9. Refunds will not be issued for the services such as pilot
            boosting and account boosting. For the selfplay boosts refund can be
            issued if the right conditions are met:
            <br />
            <br />
            a) Agent failed to deliver on time
            <br />
          </p>
          <ol start="3">
            <li>Special conditions:</li>
          </ol>
          <p>
            3.1. The Client understands and confirms, that the Agent acts after
            the Client’s orders, that the Agent does only the mediation services
            for the Client and can’t be responsible for possible legal
            consequences that may happen to the Client’s account (for example,
            in some games there are sanctions to the accounts which were passed
            to the third parties; the Agent does not examine the rules of the
            game and does not examine the actions of the Client, including those
            connected to the Agreement, to suit the Game’s rules). The Agent is
            only responsible for the effective actions performed by the third
            parties for the Client’s account, but not for their result.
          </p>
          <p>
            3.2. On the Agent’s side the placement of the documents on the
            Agent’s site is considered to be valid signature, because only the
            Agent and its trustees have a right to access the information posted
            on the Agent’s site. The documents, posted on the Agent’s site as a
            result of a third party’s crime, will not be valid.
          </p>
          <p>
            3.3. The messages, send from the e-mails of both parties appear as
            documents, written in a simple form and signed by specific party,
            and they are an analogue of the valid signature. The parties agree
            that such documents (messages) will be valid without any additional
            confirmations or registrations (and not requiring autographic
            signing), only if the other is not directly specified on the Agent’s
            site.
            <br />
          </p>
          <ol start="4">
            <li>Additional terms</li>
          </ol>
          <p>
            For customer service inquiries or disputes, You may contact us on
            discord Shator#6666
          </p>
          <p>
            Where possible, we will work with You and/or any user selling on our
            website, to resolve any disputes arising from your purchase.
          </p>
          <p>
            <strong>
              <em>All boosting services are provided at your own risk.</em>
            </strong>
          </p>
          <p>
            <strong>
              <em>
                The purchase of boosting is restricted by rules of some games
                and the administration of the game can ban your account. Upon
                buying such services, you agree on these rules and should
                understand it.
              </em>
            </strong>
          </p>
        </Content>
      </Container>
    </Layout>
  )
}

export default TermsPage

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
