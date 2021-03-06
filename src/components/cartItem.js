import React from "react"
import FormatedPrice from "./formatedPrice"

const CartItem = ({ id, name, price: priceWithCurrency, qty, removeItem }) => {
  const priceWithoutCurrency = priceWithCurrency
    .replace("€", "")
    .replace(",", "")
  return (
    <tr className="woocommerce-cart__item">
      <td className="woocommerce-cart__item-name">{name}</td>
      <td>
        <FormatedPrice price={priceWithoutCurrency} />
      </td>
      <td>{qty}</td>
      <td>
        <FormatedPrice price={priceWithoutCurrency * qty} />
      </td>
      <td className="remove-item">
        <button className="button" onClick={() => removeItem(id)}>
          Remove
        </button>
      </td>
    </tr>
  )
}

export default CartItem
