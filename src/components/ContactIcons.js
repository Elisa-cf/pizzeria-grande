import React from 'react';
import { GoLocation } from 'react-icons/go'
import { BsWhatsapp } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import styled from 'styled-components';

const ContactIcons = () => {
  return (
    <ContactIconsContainer>

      <ul>
        <div class="parent">
          <li class="li1">
            <GoLocation style={{ fontSize: "1.8rem", color: "#03c03c" }} />
            <h3>Location</h3>
            <p>Prielmayerstraße 5, 80335 Munich, Germany</p>
          </li>
          <li class="li2">
            <BsWhatsapp style={{ fontSize: "1.8rem", color: "#03c03c" }} />
            <h3>
              Phone Number</h3>
            <p>+49 895 529 5867</p>
          </li>
          <li class="li3">
            <MdAlternateEmail style={{ fontSize: "1.8rem", color: "#03c03c" }} />
            <h3>email address</h3>
            <p>pizzeriagrande@gmail.com</p>
          </li>
        </div>
      </ul>
    </ContactIconsContainer>
  )
}

const ContactIconsContainer = styled.section`
background-color: #dcdcdc;
margin-top: 2rem;
.parent {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  list-style: none;
  padding: 40px 40px 40px 5px;
  text-align: center;
}
.services_title {
  text-align: center;
  padding-top: 30px;
  font-size: 18px;
}
@media screen and (min-width: 800px){ 
  padding: 5rem 0;
  .parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  .li1 { grid-area: 1 / 1 / 2 / 2; }
  .li2 { grid-area: 1 / 2 / 2 / 3; }
  .li3 { grid-area: 1 / 3 / 2 / 4; }
`

export default ContactIcons