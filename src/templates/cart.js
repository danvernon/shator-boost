import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CartItem from "../components/cartItem"
import FormatedPrice from "../components/formatedPrice"
import { HeaderImageContainer, HeaderImg } from "../pages/index"

const Cart = () => {
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

  let [cartItems, setCartItems] = useState([])

  useEffect(() => {
    let items = !localStorage.getItem("cart")
      ? null
      : JSON.parse(localStorage.getItem("cart"))

    if (null != items) {
      setCartItems(items)
    }
  }, [])

  function removeItemFromCart(id) {
    let updatedCartItems = cartItems.filter(item => item.id !== id)
    localStorage.setItem("cart", JSON.stringify(updatedCartItems))
    setCartItems(updatedCartItems)
  }

  let total = 0
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
        <table className="woocommerce-cart__wrapper">
          <thead>
            <tr>
              <th className="product-heading">Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Sub Total</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => {
              console.log(item)
              total +=
                Number.parseInt(item.price.replace("€", "").replace(",", "")) *
                item.qty
              return (
                <CartItem
                  key={item.id}
                  {...item}
                  removeItem={removeItemFromCart}
                />
              )
            })}
            <tr>
              <td className="woocommerce-cart__total" colSpan="4">
                Total: <FormatedPrice price={total} />
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </Layout>
  )
}

export default Cart
