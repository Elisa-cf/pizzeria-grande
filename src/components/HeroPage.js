import React from 'react';
import ImgBg from '../images/hero-image.jpg';
import styled from 'styled-components';
import NavBar from './NavBar';

const HeroPage = () => {
  return (

    <HeroContainer>
      <NavBar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Authentic Italian Pizza</HeroH1>
          <HeroH3>In the heart of Munich</HeroH3>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>

  )
}

const HeroContainer = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`
const HeroContent = styled.div`
height: calc(100vh - 80px);
max - height: 100 %;
padding: 0rem calc((100vw - 1300px) / 2);
` 

const HeroItems = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`
const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 7vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`

const HeroH3 = styled.h3`
 font-size: clamp(2rem, 2.5vw, 3rem);
 margin-bottom: 2rem;
 text-transform: capitalize;
`

const HeroBtn = styled.button`
font-size: 1.2rem;
padding: 0.5rem 2rem;
border: none;
background: #03c03c;
color: #fff;
transition: 0.2s ease-out;
&:hover {
 background: #ffc500;
 transition: 0.2s ease-out;
 cursor: pointer;
 color: #000;
}

@media screen and (min-width: 450px){
padding: 1rem 3rem;
font-size: 1.3rem;
}
`

export default HeroPage