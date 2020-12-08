import React, { useContext } from "react"

import StoreContext from "../../context/StoreContext"
import { Wrapper } from "./styles"

const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }
  return (
    <Wrapper>
      <p>
        {item.quantity} x {item.title}
        {`  `}
        {item.variant.title !== "Default Title" ? item.variant.title : ""}
      </p>
      {/* {selectedOptions} */}
      {selectedOptions.indexOf("Title: Default Title ") > -1 ? (
        <div />
      ) : (
        selectedOptions
      )}
      <p>€{item.variant.price}</p>
      <button onClick={handleRemove}>Remove</button>
    </Wrapper>
  )
}

export default LineItem
