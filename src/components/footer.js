import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        {/* <Trustpilot /> */}
        <FooterMain>
          <div>
            <p>
              All material that is not distinctive of Shator-boost’s own
              personal brand is registered and of property of Blizzard
              Entertainment, Inc. World of WarcraftTM is a trademark of Blizzard
              Entertainment inc. All rights on related materials, logos and
              characters respectively belongs to Blizzard Entertainment inc.
              Shator-boost is in no way associated with Blizzard Entertainment
              inc.
            </p>
            <p>Copyright © 2020 Shator-Boost</p>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li>
                <Link to="/gladiator-boost">Gladiator</Link>
              </li>
              <li>
                <Link to="/coaching">Coaching</Link>
              </li>
              <li>
                <Link to="/arena-rating">Arena Rating</Link>
              </li>
              <li>
                <Link to="/vicious-saddle-prod">Vicious Saddle</Link>
              </li>
              <li>
                <Link to="/rank-one-account">Rank One</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Legal</h5>
            <ul>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Social</h5>
            <IconContainer>
              <Icon>
                <Discord />
                <p>Shator#6666</p>
              </Icon>
              <Icon>
                <a href="https://www.facebook.com/ShatorBoost" target="_blank">
                  <Facebook />
                </a>
              </Icon>
              <Icon>
                <a
                  href="https://join.skype.com/invite/jE90iBvhgzdK"
                  target="_blank"
                >
                  <Skype />
                </a>
              </Icon>
              <Icon>
                <a
                  href="https://www.instagram.com/shatorboost/?hl=en"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </Icon>
            </IconContainer>
          </div>
        </FooterMain>
      </Container>
    </FooterContainer>
  )
}

export default Footer

const FooterMain = styled.div`
  display: grid;
  grid-gap: 50px;
  /* padding-top: 100px; */

  @media (min-width: 728px) {
    grid-template-columns: 4fr 1fr 1fr 1fr 1fr;
  }

  p {
    font-size: 12px;
  }

  h5 {
    font-weight: 500;
    margin-top: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    a {
      color: #fff;
      font-size: 14px;
      opacity: 0.7;
      transition: all ease-in-out 0.2s;

      &:hover {
        color: #fff;
        opacity: 1;
        text-decoration: underline;
      }
    }
  }
`

const FooterContainer = styled.div`
  padding: 50px 0;
`

const IconContainer = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;

  @media (min-width: 728px) {
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
`

const Icon = styled.div`
  svg {
    height: 40px;
    width: 40px;

    @media (max-width: 728px) {
      height: 25px;
      width: 25px;
    }
  }
`

const Discord = () => (
  <svg
    width="100"
    height="115"
    viewBox="0 0 100 115"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M66.3429 54.2857C66.3429 57.7714 63.7714 60.6286 60.5143 60.6286C57.3143 60.6286 54.6857 57.7714 54.6857 54.2857C54.6857 50.8 57.2571 47.9429 60.5143 47.9429C63.7714 47.9429 66.3429 50.8 66.3429 54.2857ZM39.6571 47.9429C36.4 47.9429 33.8286 50.8 33.8286 54.2857C33.8286 57.7714 36.4571 60.6286 39.6571 60.6286C42.9143 60.6286 45.4857 57.7714 45.4857 54.2857C45.5429 50.8 42.9143 47.9429 39.6571 47.9429ZM100 11.7714V114.286C85.604 101.564 90.208 105.775 73.4857 90.2286L76.5143 100.8H11.7143C5.25714 100.8 0 95.5429 0 89.0286V11.7714C0 5.25714 5.25714 0 11.7143 0H88.2857C94.7429 0 100 5.25714 100 11.7714ZM83.7143 65.9429C83.7143 47.5429 75.4857 32.6286 75.4857 32.6286C67.2571 26.4571 59.4286 26.6286 59.4286 26.6286L58.6286 27.5429C68.3429 30.5143 72.8571 34.8 72.8571 34.8C59.2833 27.3605 43.3384 27.3592 30.1714 33.1429C28.0571 34.1143 26.8 34.8 26.8 34.8C26.8 34.8 31.5429 30.2857 41.8286 27.3143L41.2571 26.6286C41.2571 26.6286 33.4286 26.4571 25.2 32.6286C25.2 32.6286 16.9714 47.5429 16.9714 65.9429C16.9714 65.9429 21.7714 74.2286 34.4 74.6286C34.4 74.6286 36.5143 72.0571 38.2286 69.8857C30.9714 67.7143 28.2286 63.1429 28.2286 63.1429C29.0692 63.7313 30.4554 64.494 30.5714 64.5714C40.2165 69.9728 53.917 71.7424 66.2286 66.5714C68.2286 65.8286 70.4571 64.7429 72.8 63.2C72.8 63.2 69.9429 67.8857 62.4571 70C64.1714 72.1714 66.2286 74.6286 66.2286 74.6286C78.8571 74.2286 83.7143 65.9429 83.7143 65.9429V65.9429Z"
      fill="white"
    />
  </svg>
)

const Facebook = () => (
  <svg
    width="98"
    height="97"
    viewBox="0 0 98 97"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M97.4375 49C97.4375 22.2422 75.7578 0.5625 49 0.5625C22.2422 0.5625 0.5625 22.2422 0.5625 49C0.5625 73.1758 18.2754 93.2148 41.4316 96.8516V63.002H29.127V49H41.4316V38.3281C41.4316 26.1895 48.6582 19.4844 59.7266 19.4844C65.0273 19.4844 70.5703 20.4297 70.5703 20.4297V32.3438H64.4609C58.4453 32.3438 56.5684 36.0781 56.5684 39.9082V49H70.002L67.8535 63.002H56.5684V96.8516C79.7246 93.2148 97.4375 73.1758 97.4375 49Z"
      fill="white"
    />
  </svg>
)

const Skype = () => (
  <svg
    width="100"
    height="101"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M94.7991 59.9198C95.4464 56.7948 95.8482 53.469 95.8482 50.1431C95.8482 24.8082 75.3348 4.31717 50.0223 4.31717C46.6964 4.31717 43.3929 4.69664 40.2455 5.36628C36.0045 2.08503 30.7366 0.143066 25 0.143066C11.2054 0.143066 0 11.3484 0 25.1431C0 30.8797 1.94196 36.1475 5.20089 40.3663C4.55357 43.4913 4.15179 46.8172 4.15179 50.1431C4.15179 75.4779 24.6652 95.969 49.9777 95.969C53.3036 95.969 56.6071 95.5895 59.7545 94.9199C63.9955 98.1788 69.2634 100.121 74.9777 100.121C88.7723 100.121 99.9777 88.9154 99.9777 75.1207C100 69.4065 98.058 64.1386 94.7991 59.9198V59.9198ZM51.3616 80.344C36.7188 80.344 24.4643 73.8261 24.4643 65.835C24.4643 62.2636 26.4732 59.0047 31.0491 59.0047C38.0134 59.0047 38.6607 69.027 50.7143 69.027C56.4509 69.027 60.1562 66.4823 60.1562 63.1565C60.1562 58.9823 56.5848 58.335 50.7812 56.9065C36.8304 53.469 24.4866 51.9957 24.4866 37.4422C24.4866 24.2279 37.567 19.3395 48.8393 19.3395C61.1384 19.3395 73.5714 24.2279 73.5714 31.7056C73.5714 35.4779 71.0268 38.8038 66.808 38.8038C60.4911 38.8038 60.2902 31.3261 50.067 31.3261C44.3304 31.3261 40.692 32.8886 40.692 36.3484C40.692 40.7681 45.3348 41.2145 56.1161 43.7145C65.3571 45.7904 76.3616 49.6966 76.3616 61.0359C76.3616 74.2279 63.6161 80.344 51.3616 80.344V80.344Z"
      fill="white"
    />
  </svg>
)

const Twitch = () => (
  <svg
    width="92"
    height="100"
    viewBox="0 0 92 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M72.4004 20.209H64.8555V41.6348H72.4004V20.209ZM51.6641 20.1172H44.1191V41.5527H51.6641V20.1172ZM19.5996 0L0.748047 17.8555V82.1445H23.3711V100L42.2246 82.1445H57.3125L91.252 50V0H19.5996ZM83.709 46.4355L68.627 60.7168H53.541L40.3379 73.2168V60.7168H23.3711V7.14453H83.709V46.4355Z"
      fill="white"
    />
  </svg>
)

const Youtube = () => (
  <svg
    width="96"
    height="67"
    viewBox="0 0 96 67"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M93.426 10.5422C92.3355 6.43626 89.1227 3.20258 85.0433 2.10518C77.6492 0.111084 47.9998 0.111084 47.9998 0.111084C47.9998 0.111084 18.3504 0.111084 10.9562 2.10518C6.87683 3.20275 3.66399 6.43626 2.57354 10.5422C0.592285 17.9843 0.592285 33.5118 0.592285 33.5118C0.592285 33.5118 0.592285 49.0392 2.57354 56.4814C3.66399 60.5873 6.87683 63.6863 10.9562 64.7836C18.3504 66.7777 47.9998 66.7777 47.9998 66.7777C47.9998 66.7777 77.6491 66.7777 85.0433 64.7836C89.1227 63.6863 92.3355 60.5873 93.426 56.4814C95.4072 49.0392 95.4072 33.5118 95.4072 33.5118C95.4072 33.5118 95.4072 17.9843 93.426 10.5422V10.5422ZM38.3027 47.6095V19.414L63.0838 33.5121L38.3027 47.6095V47.6095Z"
      fill="white"
    />
  </svg>
)

const Instagram = () => (
  <svg
    width="100"
    height="101"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50.0225 24.4732C35.826 24.4732 24.3751 35.9241 24.3751 50.1205C24.3751 64.3169 35.826 75.7678 50.0225 75.7678C64.2189 75.7678 75.6698 64.3169 75.6698 50.1205C75.6698 35.9241 64.2189 24.4732 50.0225 24.4732ZM50.0225 66.7946C40.8484 66.7946 33.3484 59.3169 33.3484 50.1205C33.3484 40.9241 40.826 33.4464 50.0225 33.4464C59.2189 33.4464 66.6966 40.9241 66.6966 50.1205C66.6966 59.3169 59.1966 66.7946 50.0225 66.7946V66.7946ZM82.701 23.4241C82.701 26.75 80.0225 29.4062 76.7189 29.4062C73.393 29.4062 70.7367 26.7276 70.7367 23.4241C70.7367 20.1205 73.4153 17.4419 76.7189 17.4419C80.0225 17.4419 82.701 20.1205 82.701 23.4241ZM99.6876 29.4955C99.3082 21.4821 97.4778 14.3839 91.6073 8.53568C85.7591 2.68746 78.6609 0.857108 70.6475 0.455322C62.3885 -0.0134277 37.6341 -0.0134277 29.3751 0.455322C21.3841 0.834787 14.2859 2.66514 8.41532 8.51336C2.54478 14.3616 0.736747 21.4598 0.334961 29.4732C-0.133789 37.7321 -0.133789 62.4866 0.334961 70.7455C0.714425 78.7589 2.54478 85.8571 8.41532 91.7053C14.2859 97.5535 21.3617 99.3839 29.3751 99.7857C37.6341 100.254 62.3885 100.254 70.6475 99.7857C78.6609 99.4062 85.7591 97.5759 91.6073 91.7053C97.4555 85.8571 99.2859 78.7589 99.6876 70.7455C100.156 62.4866 100.156 37.7544 99.6876 29.4955V29.4955ZM89.018 79.6071C87.2769 83.9821 83.9064 87.3526 79.5091 89.116C72.9243 91.7276 57.2992 91.125 50.0225 91.125C42.7457 91.125 27.0984 91.7053 20.5359 89.116C16.1609 87.375 12.7903 84.0044 11.0269 79.6071C8.41532 73.0223 9.018 57.3973 9.018 50.1205C9.018 42.8437 8.43764 27.1964 11.0269 20.6339C12.768 16.2589 16.1385 12.8884 20.5359 11.125C27.1207 8.51336 42.7457 9.11604 50.0225 9.11604C57.2992 9.11604 72.9466 8.53568 79.5091 11.125C83.8841 12.866 87.2546 16.2366 89.018 20.6339C91.6296 27.2187 91.0269 42.8437 91.0269 50.1205C91.0269 57.3973 91.6296 73.0446 89.018 79.6071Z"
      fill="white"
    />
  </svg>
)

// const Trustpilot = () => (
//   <TrustpilotContainer>
//     <TrustpilotLogo />
//   </TrustpilotContainer>
// )

// const TrustpilotContainer = styled.div`
//   text-align: center;
// `

// const TrustpilotLogo = () => (
//   <svg width="291" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M76.722 25.73h29.338v5.462H94.508V61.98h-6.331V31.192H76.673l.049-5.462zm28.081 10.006h5.414v5.075h.096c.194-.725.532-1.402 1.015-2.079a8.051 8.051 0 011.789-1.837c.676-.58 1.45-1.015 2.32-1.353a6.747 6.747 0 012.561-.532c.677 0 1.16.049 1.402.049.242.048.532.097.773.097v5.558c-.386-.097-.821-.145-1.256-.194-.435-.048-.822-.096-1.257-.096-.967 0-1.885.193-2.755.58-.87.387-1.595.967-2.272 1.692a9.156 9.156 0 00-1.546 2.803c-.387 1.111-.58 2.416-.58 3.866v12.47h-5.8l.096-26.1zm41.954 26.245h-5.704v-3.674h-.096c-.725 1.353-1.789 2.368-3.19 3.19-1.402.822-2.852 1.209-4.302 1.209-3.432 0-5.945-.822-7.492-2.562-1.546-1.692-2.32-4.302-2.32-7.733V35.736h5.8V51.83c0 2.32.435 3.963 1.354 4.881.87.967 2.126 1.45 3.721 1.45 1.209 0 2.224-.193 3.045-.58.822-.386 1.499-.87 1.982-1.498.532-.629.87-1.402 1.112-2.272.241-.87.338-1.837.338-2.851V35.736h5.8V61.98h-.048zm9.86-8.41c.193 1.691.821 2.851 1.933 3.576 1.112.677 2.465 1.015 4.012 1.015.531 0 1.16-.048 1.836-.145.677-.097 1.354-.242 1.934-.483.628-.242 1.111-.58 1.498-1.063.387-.484.58-1.064.532-1.789-.049-.725-.29-1.353-.822-1.837-.532-.483-1.16-.821-1.933-1.16-.774-.29-1.692-.531-2.707-.724-1.015-.194-2.03-.435-3.093-.677a33.39 33.39 0 01-3.142-.87c-1.015-.339-1.885-.773-2.707-1.402-.773-.58-1.45-1.305-1.885-2.223-.483-.919-.725-1.982-.725-3.335 0-1.45.339-2.61 1.064-3.577.676-.967 1.595-1.74 2.658-2.32a12.063 12.063 0 013.577-1.257 20.468 20.468 0 013.721-.338c1.354 0 2.659.145 3.867.435 1.208.29 2.368.725 3.335 1.402 1.015.628 1.837 1.498 2.465 2.513.677 1.015 1.063 2.272 1.257 3.722h-6.042c-.29-1.402-.918-2.32-1.885-2.803-1.015-.484-2.127-.726-3.432-.726-.386 0-.918.049-1.45.097-.58.097-1.063.194-1.595.387a3.776 3.776 0 00-1.256.822c-.339.338-.532.821-.532 1.401 0 .725.242 1.257.725 1.692.483.435 1.112.773 1.933 1.111.774.29 1.692.532 2.707.725 1.015.194 2.078.435 3.142.677 1.063.242 2.078.532 3.093.87 1.015.339 1.933.773 2.707 1.402.773.58 1.45 1.305 1.933 2.175.483.87.725 1.982.725 3.238 0 1.547-.338 2.852-1.063 3.964-.725 1.063-1.644 1.981-2.755 2.658-1.112.677-2.417 1.16-3.77 1.498-1.402.29-2.755.483-4.109.483-1.643 0-3.19-.193-4.591-.58-1.402-.386-2.659-.966-3.674-1.691-1.015-.773-1.836-1.692-2.416-2.852-.58-1.111-.919-2.465-.967-4.06h5.848v.049h.049zm19.091-17.835h4.399v-7.927h5.8v7.878h5.22v4.302h-5.22v14.017c0 .628.048 1.111.096 1.594.049.435.194.822.339 1.112.193.29.483.532.821.677.387.145.87.241 1.547.241.387 0 .822 0 1.208-.048.387-.048.822-.096 1.209-.193v4.495c-.629.096-1.257.145-1.885.193-.629.097-1.209.097-1.885.097-1.547 0-2.755-.145-3.674-.435-.918-.29-1.643-.725-2.175-1.257-.531-.58-.87-1.257-1.063-2.078-.193-.822-.29-1.837-.338-2.9V40.037h-4.399V35.64v.096zm19.479 0h5.461v3.576h.097c.822-1.546 1.933-2.61 3.383-3.286 1.45-.677 2.997-1.016 4.737-1.016 2.078 0 3.867.339 5.413 1.112 1.547.725 2.804 1.692 3.819 2.997 1.015 1.257 1.788 2.755 2.271 4.447.484 1.691.774 3.528.774 5.413 0 1.788-.242 3.48-.677 5.123-.483 1.644-1.16 3.142-2.078 4.399a10.293 10.293 0 01-3.529 3.044c-1.45.774-3.093 1.16-5.026 1.16-.822 0-1.692-.096-2.514-.241a10.698 10.698 0 01-2.416-.725 8.65 8.65 0 01-2.127-1.305 7.357 7.357 0 01-1.643-1.837h-.097v13.098h-5.8v-35.96h-.048zm20.251 13.146c0-1.16-.145-2.32-.483-3.431a8.741 8.741 0 00-1.402-2.949 7.726 7.726 0 00-2.271-2.078c-.919-.532-1.982-.773-3.142-.773-2.417 0-4.253.821-5.51 2.513-1.208 1.691-1.837 3.963-1.837 6.767 0 1.353.145 2.561.484 3.673.338 1.111.773 2.078 1.45 2.9a6.896 6.896 0 002.32 1.933c.918.483 1.933.725 3.141.725 1.354 0 2.417-.29 3.335-.822.919-.531 1.644-1.256 2.272-2.078a8.512 8.512 0 001.257-2.948c.241-1.16.386-2.272.386-3.432zm10.199-23.151h5.8v5.461h-5.8V25.73zm0 10.005h5.8V61.98h-5.8V35.736zm10.971-10.005h5.8v36.25h-5.8V25.73zm23.49 36.974c-2.078 0-3.963-.338-5.606-1.063-1.644-.725-2.997-1.643-4.157-2.852-1.112-1.208-1.982-2.706-2.562-4.398a17.182 17.182 0 01-.918-5.558c0-1.982.29-3.819.918-5.51a12.849 12.849 0 012.562-4.398c1.112-1.209 2.513-2.175 4.157-2.852 1.643-.677 3.528-1.063 5.606-1.063 2.079 0 3.964.338 5.607 1.063a12.034 12.034 0 014.157 2.852c1.111 1.208 1.981 2.706 2.561 4.398.58 1.692.919 3.528.919 5.51 0 2.03-.29 3.866-.919 5.558-.628 1.692-1.45 3.142-2.561 4.398-1.112 1.209-2.514 2.175-4.157 2.852-1.643.677-3.48 1.063-5.607 1.063zm0-4.591c1.257 0 2.417-.29 3.335-.822.967-.532 1.692-1.257 2.32-2.127.629-.87 1.064-1.884 1.354-2.948a13.165 13.165 0 000-6.718c-.29-1.112-.725-2.079-1.354-2.949a7.332 7.332 0 00-2.32-2.078c-.966-.532-2.078-.822-3.335-.822-1.256 0-2.416.29-3.335.822-.966.532-1.691 1.257-2.32 2.078-.628.87-1.063 1.837-1.353 2.949a13.165 13.165 0 000 6.718c.29 1.112.725 2.078 1.353 2.949a7.507 7.507 0 002.32 2.126c.967.58 2.079.822 3.335.822zm14.984-22.378h4.398v-7.927h5.8v7.878h5.22v4.302h-5.22v14.017c0 .628.048 1.111.097 1.594.048.435.193.822.338 1.112.193.29.483.532.822.677.386.145.87.241 1.546.241.387 0 .822 0 1.209-.048.386-.048.821-.096 1.208-.193v4.495c-.628.096-1.257.145-1.885.193-.628.097-1.208.097-1.885.097-1.547 0-2.755-.145-3.673-.435-.919-.29-1.644-.725-2.175-1.257-.532-.58-.87-1.257-1.064-2.078-.193-.822-.29-1.837-.338-2.9V40.037h-4.398V35.64v.096z"
//       fill="#fff"
//     />
//     <path
//       d="M69.955 25.73H43.42L35.252.5l-8.217 25.23L.5 25.682l21.46 15.611-8.217 25.23 21.46-15.611 21.46 15.611-8.168-25.23 21.46-15.563z"
//       fill="#00B67A"
//     />
//     <path
//       d="M50.332 46.997l-1.837-5.703-13.243 9.618 15.08-3.915z"
//       fill="#005128"
//     />
//   </svg>
// )
