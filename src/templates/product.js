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
import Slider from "rc-slider"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import How from "../components/how"

import AddToCartButton from "../components/addToCart"
import { HeaderImageContainer, HeaderImg } from "../pages/index"

export const pageQuery = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      shopifyId
      title
      variants {
        id
        price
        title
        shopifyId
      }
      options {
        name
        values
      }
      description
      descriptionHtml
      handle
      priceRange {
        minVariantPrice {
          amount
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
  const [first, setFirst] = useState(attributes[0]?.values[0])
  const [second, setSecond] = useState(attributes[1]?.values[0])
  const [third, setThird] = useState(attributes[2]?.values[0])
  const [update, setUpdate] = useState(undefined)
  const [productId, setProductId] = useState(
    variations ? variations[0].shopifyId : simpleId
  )

  const handleFirstChange = event => {
    setFirst(event.target.value)
    setUpdate(Math.random())
  }

  const handleSecondChange = event => {
    setSecond(event.target.value)
    setUpdate(Math.random())
  }

  const handleThirdChange = event => {
    setThird(event.target.value)
    setUpdate(Math.random())
  }

  const marks = {
    0: "1500",
    1: "1600",
    2: "1700",
    3: "1800",
    4: "1900",
    5: "2000",
    6: "2100",
    7: "2200",
    8: "2300",
    9: "2400",
  }

  const handleChange = props => {
    setThird(marks[props])
    setUpdate(Math.random())
  }

  const searchTerm =
    attributes.length === 2
      ? `${first} / ${second}`
      : attributes.length === 1
      ? `${third}`
      : ""

  var result = variations?.find(obj => {
    return obj.title === searchTerm
  })

  useEffect(() => {
    if (update) {
      setProductId(result.shopifyId)
    }
  }, [result, update])

  const id = result ? productId : simpleId

  const price = result ? result.price : regPrice

  return (
    <div className="woocommerce-product__detail">
      <h1 className="woocommerce-product__name">{name}</h1>
      <p
        className="woocommerce-product__description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <p className="woocommerce-product__price">
        <span>€{Number(price).toFixed(2)}</span>
      </p>

      {attributes && attributes[0]?.name !== "Title" && (
        <>
          {attributes[0]?.name === "Desired Rating" ? (
            <div style={{ margin: "40px 0 50px" }}>
              <Form.Label>Rating</Form.Label>
              <Slider
                min={0}
                max={9}
                step={1}
                dots={true}
                defaultValue={0}
                marks={marks}
                onChange={props => handleChange(props)}
              />
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridGap: 15,
                gridTemplateColumns: "repeat(2, 180px)",
                justifyContent: "center",
                marginBottom: 15,
              }}
            >
              {attributes?.slice(0, 1).map((attribute, index) => (
                <div key={index}>
                  <Form.Label>{attribute.name}</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={e => handleFirstChange(e)}
                  >
                    {attribute.values?.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Control>
                </div>
              ))}
              {attributes?.slice(1, 2).map((attribute, index) => (
                <div key={index}>
                  <Form.Label>{attribute.name}</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={e => handleSecondChange(e)}
                  >
                    {attribute.values?.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Control>
                </div>
              ))}
            </div>
          )}
        </>
      )}
      <AddToCartButton product={{ id, name, price }} />
    </div>
  )
}

const Product = ({ location, data: { shopifyProduct: product, header } }) => {
  const imageData = header.childImageSharp.fluid

  const paragraphs = product.descriptionHtml.split("</p>")
  const firstParagraph = paragraphs[0] + "</p>"

  return (
    <Layout>
      <SEO location={location} title={product.title} />
      <HeaderImageContainer>
        <div className="content">
          <Container>
            <div className="woocommerce-product__wrapper">
              <ProductDetail
                attributes={product.options}
                simpleId={product.variants[0].shopifyId}
                description={firstParagraph}
                regPrice={product.priceRange.minVariantPrice.amount}
                name={product.title}
                variations={product.variants}
              />
            </div>
          </Container>
        </div>
        <HeaderImg fluid={imageData} />
      </HeaderImageContainer>
      <Container>
        {paragraphs.length > 2 && (
          <Content dangerouslySetInnerHTML={{ __html: paragraphs.slice(1) }} />
        )}
        <How />
      </Container>
    </Layout>
  )
}

export default Product

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
