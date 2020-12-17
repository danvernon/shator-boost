import React from "react"
import styled from "styled-components"

const How = () => {
  return (
    <HowContainer>
      <div>
        <HowIcon>
          <svg width="59" height="57" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M29.533 0a5.68 5.68 0 00-1.64.246l-5.151 1.547-5.919 1.786v14.958l-6.573 1.249V5.564l-5.753 1.74-2.42.73A2.92 2.92 0 000 10.836v35.322a2.92 2.92 0 002.07 2.802l25.79 7.794A5.68 5.68 0 0029.5 57a5.68 5.68 0 001.64-.246l25.79-7.794A2.92 2.92 0 0059 46.158V10.836a2.92 2.92 0 00-2.07-2.802L31.14.239A5.68 5.68 0 0029.533 0zM32 6l21 6.205v30.59L32 49V6zm16.95 19.492a7.062 7.062 0 010 1.678 6.39 6.39 0 01-.144.789 5.54 5.54 0 01-.239.735c-.09.234-.2.46-.326.674l-3.839 6.403-.069.1-.081.075-.088.054h-.276l-.082-.054-.069-.08-4.648-6.377a5.221 5.221 0 01-.458-.809 6.033 6.033 0 01-.351-.896 6.754 6.754 0 01-.22-.984 7.236 7.236 0 01-.056-1.038 7.006 7.006 0 01.044-1.052c.046-.325.117-.645.213-.957.1-.29.224-.57.37-.836.134-.263.291-.511.47-.741a3.63 3.63 0 01.559-.573c.193-.156.404-.285.627-.384.42-.192.878-.26 1.33-.196.226.033.447.097.659.19.22.092.431.211.627.356.2.15.384.322.552.513.18.208.341.434.483.674l.176.283.169-.236c.136-.196.292-.374.464-.533.157-.142.33-.262.514-.357.173-.088.357-.15.546-.182.187-.03.378-.03.565 0 .19.027.376.081.552.162.18.083.35.19.508.317.167.137.32.293.458.465a5.187 5.187 0 01.728 1.267c.079.251.141.508.188.768.063.257.111.518.144.782z"
              fill="#ffd04e"
              fillRule="nonzero"
            />
          </svg>
        </HowIcon>
        <p>
          First step is to choose the service that you want to buy. Some
          services can be directly bought through the website while some require
          you to go through discord first.
        </p>
      </div>
      <div>
        <HowIcon>
          <svg width="60" height="42" xmlns="http://www.w3.org/2000/svg">
            <g fill="#ffd04e" fillRule="nonzero">
              <path d="M54.947.158H5.052A5.053 5.053 0 00-.001 5.211v2.526h60V5.21A5.05 5.05 0 0054.947.158zM0 36.789a5.053 5.053 0 005.053 5.053h49.895a5.053 5.053 0 005.053-5.053V15.315h-60v21.474H0zm36.869-8.21h7.421v2.21h-7.421v-2.21zm-10.579 0h7.421v2.21H26.29v-2.21zm-10.264 0h7.421v2.21h-7.421v-2.21zm-10.579 0h7.421v2.21H5.447v-2.21zm0 4.263H33.71v1.737H5.447v-1.737z" />
            </g>
          </svg>
        </HowIcon>
        <p>
          For the services where you can directly checkout on the website simply
          fill your information. For the services where you will need to join
          our discord, our manager will contact you.
        </p>
      </div>
      <div>
        <HowIcon>
          <svg width="44" height="50" xmlns="http://www.w3.org/2000/svg">
            <g fill="#ffd04e" fillRule="nonzero">
              <path d="M17.252 20.492c-1.396 0-2.498 1.292-2.498 2.869 0 1.576 1.127 2.869 2.498 2.869 1.396 0 2.498-1.293 2.498-2.87.024-1.576-1.102-2.868-2.498-2.868zm8.939 0c-1.396 0-2.498 1.292-2.498 2.869 0 1.576 1.126 2.869 2.498 2.869 1.396 0 2.498-1.293 2.498-2.87 0-1.576-1.102-2.868-2.498-2.868z" />
              <path d="M38.354 0H5.089C2.284 0 0 2.3 0 5.15v33.8c0 2.85 2.284 5.15 5.089 5.15h28.15l-1.315-4.625 3.178 2.975 3.003 2.8L43.443 50V5.15c0-2.85-2.284-5.15-5.09-5.15zM28.77 32.65s-.893-1.075-1.638-2.025c3.252-.925 4.493-2.975 4.493-2.975a14.168 14.168 0 01-2.855 1.475 16.253 16.253 0 01-3.6 1.075c-2.382.45-4.567.325-6.429-.025a20.728 20.728 0 01-3.649-1.075 14.5 14.5 0 01-1.812-.85c-.074-.05-.149-.075-.223-.125-.05-.025-.075-.05-.1-.075a8.699 8.699 0 01-.695-.425s1.192 2 4.344 2.95c-.744.95-1.663 2.075-1.663 2.075-5.486-.175-7.571-3.8-7.571-3.8 0-8.05 3.575-14.575 3.575-14.575 3.574-2.7 6.975-2.625 6.975-2.625l.248.3c-4.468 1.3-6.528 3.275-6.528 3.275s.546-.3 1.464-.725c2.656-1.175 4.767-1.5 5.635-1.575.15-.025.273-.05.422-.05 1.515-.2 3.228-.25 5.015-.05 2.358.275 4.89.975 7.472 2.4 0 0-1.961-1.875-6.181-3.175l.347-.4s3.401-.075 6.976 2.625c0 0 3.575 6.525 3.575 14.575 0 0-2.11 3.625-7.597 3.8z" />
            </g>
          </svg>
        </HowIcon>
        <p>
          We will contact you on discord and start the process of the service as
          soon as possible.
        </p>
      </div>
    </HowContainer>
  )
}

export default How

const HowContainer = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-gap: 25px;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 50px;
  text-align: center;

  @media (min-width: 728px) {
    grid-gap: 50px;
    grid-template-columns: repeat(3, 1fr);
  }

  p {
    margin: 0;
    opacity: 0.7;
  }
`

const HowIcon = styled.div`
  align-items: center;
  border: 2px solid #ffd04e;
  border-radius: 50%;
  display: flex;
  height: 100px;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 25px;
  width: 100px;
`
