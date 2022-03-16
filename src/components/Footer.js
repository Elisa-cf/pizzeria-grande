import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return <Wrapper>
    <h5>&copy; {new Date().getFullYear()}
      <span> Pizzeria GRANDE </span>
    </h5>
    <h5>All rights reserved</h5>
  </Wrapper>
}

const Wrapper = styled.footer`
height: 5rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #0b1015;
text-align: center;
span {
  color: #e9ba23;
}
h5 {
  color: white;
  margin: 0.1rem;
  font-weight: bold;
  text-transform: none;
  line-height: 1.25;
}
@media (min-width: 900px) {
  flex-direction: row;
}
`
export default Footer;