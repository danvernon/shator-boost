import React, { useContext } from "react"
import styled from "styled-components"

import StoreContext from "../context/StoreContext"
import LineItem from "./LineItem"

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <>
      <Content>{lineItems}</Content>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <h3 style={{ marginBottom: 10, marginTop: 0 }}>Total</h3>
        <p style={{ fontSize: 18, marginBottom: 15, opacity: 1 }}>
          €{checkout.totalPrice}
        </p>
        <br />
        <button
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
        >
          Checkout
        </button>
      </Content>
    </>
  )
}

export default Cart

const Content = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 auto 30px;
  max-width: 800px;
  padding-bottom: 30px;

  p {
    margin: 0;
    opacity: 0.7;
  }
`
