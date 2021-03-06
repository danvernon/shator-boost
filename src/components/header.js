import React, { useContext } from "react"
import reduce from "lodash/reduce"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Container, Nav, Navbar } from "react-bootstrap"
import styled from "styled-components"

import StoreContext from "./context/StoreContext"

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Header = ({ title }) => {
  const [hasItems, quantity] = useQuantity()

  const data = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(height: 60, quality: 100) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  )

  const logoData = data.logo.childImageSharp.fixed

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <HeaderContainer>
          <Navbar.Brand href="/">
            <Img fixed={logoData} alt={title} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Links>
              <Link to="/gladiator-account" className="nav-link">
                Gladiator
              </Link>
              <Link to="/coaching" className="nav-link">
                Coaching
              </Link>
              <Link to="/arena-rating" className="nav-link">
                Arena Rating
              </Link>
              <Link to="/vicious-saddle-prod" className="nav-link">
                Vicious Saddle
              </Link>
              <Link to="/rated-battlegrounds" className="nav-link">
                Rated Battlegrounds
              </Link>
              <Link to="/faq" className="nav-link">
                FAQ
              </Link>
              <Link to="/contact-us" className="nav-link">
                Contact
              </Link>
              <Link
                id="woocommerce-cart"
                className="woocommerce__header-cart-link nav-link"
                to="/cart"
                style={{ opacity: 1, fontWeight: 600 }}
              >
                Cart {hasItems && <>({quantity})</>}
              </Link>
            </Links>
          </Navbar.Collapse>
        </HeaderContainer>
      </Navbar>
    </>
  )
}

export default Header

const HeaderContainer = styled(Container)`
  .shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  .navbar-toggler {
    min-width: auto;
  }
`

const Links = styled(Nav)`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    color: #fff !important;
    font-size: 14px;
    opacity: 0.7;
    padding: 0 !important;
    padding-top: 2px !important;
    transition: all ease-in-out 0.2s;

    &:hover {
      color: #fff;
      opacity: 1;
      text-decoration: underline;
    }

    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`

// const DiscordLogo = () => (
//   <svg width="25" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       opacity=".7"
//       d="M9.514.85l-.697.085s-3.129.347-5.413 2.208h-.027l-.029.027c-.512.479-.736 1.066-1.088 1.926a28.08 28.08 0 00-1.06 3.17C.538 10.696 0 13.641 0 16.334v.226l.112.227c.826 1.472 2.294 2.409 3.655 3.057 1.36.647 2.536.99 3.348 1.019l.53.028.28-.481.976-1.756c1.036.238 2.229.397 3.599.397s2.563-.16 3.6-.397l.976 1.756.28.48.529-.027c.812-.028 1.988-.372 3.348-1.02 1.36-.647 2.829-1.584 3.655-3.056L25 16.56v-.226c0-2.693-.538-5.637-1.2-8.068a28.09 28.09 0 00-1.06-3.17c-.352-.86-.576-1.447-1.088-1.925l-.028-.029h-.028C19.312 1.282 16.183.935 16.183.935L15.486.85l-.252.65s-.258.662-.418 1.417a17.69 17.69 0 00-2.316-.17c-.478 0-1.304.031-2.316.17-.16-.755-.419-1.416-.419-1.416L9.515.85zM8.287 2.917c.038.126.076.236.111.34-1.154.29-2.385.731-3.515 1.442l.948 1.53C8.147 4.77 11.474 4.557 12.5 4.557c1.025 0 4.353.212 6.669 1.67l.948-1.529c-1.13-.71-2.36-1.153-3.515-1.444.035-.102.073-.212.111-.34.833.171 2.424.56 3.739 1.615-.007.004.335.527.642 1.274.314.768.662 1.79.976 2.943.604 2.212 1.078 4.905 1.117 7.275-.563.87-1.605 1.656-2.707 2.18a8.616 8.616 0 01-2.176.707l-.447-.764c.265-.1.527-.208.754-.311 1.374-.613 2.12-1.274 2.12-1.274l-1.172-1.359s-.502.468-1.674.991c-1.17.524-2.96 1.047-5.385 1.047-2.424 0-4.213-.523-5.385-1.047-1.172-.523-1.674-.99-1.674-.99L4.27 16.56s.746.661 2.12 1.274c.227.103.489.213.754.311l-.447.765A8.614 8.614 0 014.52 18.2c-1.102-.523-2.145-1.309-2.706-2.179.038-2.37.512-5.063 1.116-7.275.267-1 .593-1.983.976-2.943.307-.747.65-1.27.642-1.274 1.314-1.054 2.906-1.444 3.739-1.613zm1.088 6.17c-.69 0-1.3.4-1.674.906-.373.506-.558 1.129-.558 1.812s.185 1.305.558 1.811c.373.507.984.906 1.674.906s1.3-.4 1.674-.906c.373-.506.558-1.128.558-1.811s-.185-1.306-.558-1.812c-.373-.506-.984-.906-1.674-.906zm6.25 0c-.69 0-1.3.4-1.674.906-.373.506-.558 1.129-.558 1.812s.185 1.305.558 1.811c.373.507.984.906 1.674.906s1.3-.4 1.674-.906c.373-.506.558-1.128.558-1.811s-.185-1.306-.558-1.812c-.373-.506-.984-.906-1.674-.906zM9.375 10.9c.05 0 .112.018.223.17.112.151.223.417.223.736 0 .318-.111.584-.223.736-.111.151-.174.17-.223.17-.05 0-.112-.019-.223-.17a1.282 1.282 0 01-.223-.736c0-.32.111-.585.223-.737.111-.151.174-.17.223-.17zm6.25 0c.05 0 .112.018.223.17.112.151.223.417.223.736 0 .318-.111.584-.223.736-.111.151-.174.17-.223.17-.05 0-.112-.019-.223-.17a1.282 1.282 0 01-.223-.736c0-.32.111-.585.223-.737.111-.151.174-.17.223-.17z"
//       fill="#fff"
//     />
//   </svg>
// )
