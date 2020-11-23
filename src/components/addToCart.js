import React from "react"
import { navigate } from "gatsby"

function addToLocalStorage(e, product, qty = 1) {
  document.getElementById("woocommerce-cart").classList.add("shake")

  setTimeout(function () {
    document.getElementById("woocommerce-cart").classList.remove("shake")
  }, 500)

  let products = !localStorage.getItem("cart")
    ? []
    : JSON.parse(localStorage.getItem("cart"))

  let match = false
  products.map(p => {
    if (p.id === product.id) {
      p.qty += qty
      match = true
    }
    return p
  })

  if (!match) {
    product.qty = qty
    products = [...products, product]
  }

  localStorage.setItem("cart", JSON.stringify(products))
  navigate("/cart")
}

const AddToCartButton = props => {
  return (
    <>
      <button
        onClick={e => addToLocalStorage(e, props.product)}
        className="add-to-cart"
      >
        Add to Cart
      </button>
    </>
  )
}

export default AddToCartButton
