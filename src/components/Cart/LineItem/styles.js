import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  display: grid;
  /* grid-template-columns: 1fr 1fr 150px 70px; */
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (min-width: 728px) {
    grid-template-columns: 1fr 1fr 150px 70px;
  }

  button {
    background: transparent;
    box-shadow: none;
    font-size: 12px;
    font-weight: 400;
    opacity: 0.7;
    min-width: 0;
    padding: 0;
    width: min-content;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
`
