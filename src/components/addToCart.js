import React, { useContext, useState } from "react"
import { Link } from "gatsby"

import StoreContext from "./context/StoreContext"

const AddToCartButton = props => {
  const [showCart, setShowCart] = useState(false)
  const {
    addVariantToCart,
    store: { adding },
  } = useContext(StoreContext)

  const handleAddToCart = () => {
    setShowCart(false)
    addVariantToCart(props.product.id, 1)
    setShowCart(true)
  }

  console.log(props)

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="add-to-cart"
        disabled={adding}
      >
        Add to Cart
      </button>
      {showCart && (
        <div style={{ marginTop: 20 }}>
          <p>
            Item Added -{" "}
            <Link
              to="/cart"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              View Cart
            </Link>
          </p>
        </div>
      )}
    </>
  )
}

export default AddToCartButton
