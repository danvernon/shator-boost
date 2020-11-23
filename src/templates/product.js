/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"

import Layout from "../components/layout"
import SEO from "../components/seo"
import How from "../components/how"

import AddToCartButton from "../components/addToCart"
import { HeaderImageContainer, HeaderImg } from "../pages/index"

export const pageQuery = graphql`
  query($id: String!) {
    wpProduct(id: { eq: $id }) {
      ... on WpSimpleProduct {
        id
        name
        description
        regularPrice
        shortDescription
        slug
      }
      ... on WpVariableProduct {
        id
        id
        name
        description
        shortDescription
        slug
        attributes {
          nodes {
            id
            label
            name
            options
            variation
          }
        }
        variations {
          nodes {
            id
            regularPrice
            name
          }
        }
      }
    }
    header: file(relativePath: { eq: "bgs/background-revendreth.jpg" }) {
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

const ProductDetail = ({
  attributes,
  simpleId,
  name,
  regPrice,
  description,
  variations,
}) => {
  const [first, setFirst] = useState(attributes?.nodes[0].options[0])
  const [second, setSecond] = useState(attributes?.nodes[1].options[0])
  const [update, setUpdate] = useState(undefined)
  const [productId, setProductId] = useState(
    variations ? variations.nodes[0].id : simpleId
  )

  const handleFirstChange = event => {
    setFirst(event.target.value)
    setUpdate(Math.random())
  }

  const handleSecondChange = event => {
    setSecond(event.target.value)
    setUpdate(Math.random())
  }

  const searchTerm = `${name} - ${first}, ${second}`

  var result = variations?.nodes.find(obj => {
    return obj.name === searchTerm
  })

  useEffect(() => {
    if (update) {
      setProductId(result.id)
    }
  }, [result, update])

  const id = result ? productId : simpleId

  const price = result ? result.regularPrice : regPrice

  return (
    <div className="woocommerce-product__detail">
      <h1 className="woocommerce-product__name">{name}</h1>
      <p
        className="woocommerce-product__description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <p className="woocommerce-product__price">
        <span>{price}</span>
      </p>
      {attributes && (
        <div
          style={{
            display: "grid",
            gridGap: 15,
            gridTemplateColumns: "repeat(2, 180px)",
            justifyContent: "center",
            marginBottom: 15,
          }}
        >
          {attributes.nodes?.slice(0, 1).map((attribute, index) => (
            <div key={index}>
              <Form.Label>{attribute.label}</Form.Label>
              <Form.Control as="select" onChange={e => handleFirstChange(e)}>
                {attribute.options?.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
            </div>
          ))}
          {attributes.nodes?.slice(1, 2).map((attribute, index) => (
            <div key={index}>
              <Form.Label>{attribute.label}</Form.Label>
              <Form.Control as="select" onChange={e => handleSecondChange(e)}>
                {attribute.options?.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
            </div>
          ))}
        </div>
      )}
      <AddToCartButton product={{ id, name, price }} />
    </div>
  )
}

const Product = ({ location, data: { wpProduct: product, header } }) => {
  const imageData = header.childImageSharp.fluid

  // console.log(product)
  return (
    <Layout>
      <SEO location={location} title={product.name} />
      <HeaderImageContainer>
        <div className="content">
          <Container>
            <div className="woocommerce-product__wrapper">
              <ProductDetail
                attributes={product.attributes}
                simpleId={product.id}
                description={product.description}
                regPrice={
                  product.regularPrice
                    ? product.regularPrice
                    : `${product.variations.nodes[0].regularPrice}+`
                }
                name={product.name}
                variations={product.variations}
              />
            </div>
          </Container>
        </div>
        <HeaderImg fluid={imageData} />
      </HeaderImageContainer>
      <Container>
        {product.shortDescription && (
          <p
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              margin: "0 auto 30px",
              maxWidth: 600,
              paddingBottom: 30,
            }}
            className="woocommerce-product__description"
            dangerouslySetInnerHTML={{ __html: product.shortDescription }}
          />
        )}
        <How />
      </Container>
    </Layout>
  )
}

export default Product
