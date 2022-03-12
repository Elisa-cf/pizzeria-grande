import React from 'react'
import styled from 'styled-components'

const NewsLetter = () => {
 return <Wrapper><div className="section-center">
  <h2>Join our newsletter. Exclusive offers!</h2>
  <div className="content">
   <p>Become a premium customer! Be the first to know about our discounts, promotions and unique surprises.</p>
   <form className="contact-form"
    action="https://formspree.io/f/myyokagy"
    method="POST"
   >
    <input type="email" className='form-input' placeholder="enter email"
     name="_replyto" />
    <button type="submit" className='submit-btn'>subscribe</button>
   </form>
  </div>
 </div></Wrapper>
}
const Wrapper = styled.section`
  padding: 2rem 0;
  h2 {
    text-transform: none;
  }
  p {
    max-width: 45em;
  }
  .contact-form {
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.3rem 0.2rem;
    border: 2px solid #0b1015;
  }
  .form-input {
    border-right: none;
    color: #0b1015;
    border-top-left-radius: 0.25rem;;
    border-bottom-left-radius: 0.25rem;;
  }
  .submit-btn {
    border-top-right-radius: 0.25rem;;
    border-bottom-right-radius: 0.25rem;;
  }
  .form-input::placeholder {
    color: #0b1015;
    text-transform: capitalize;
  }
  .submit-btn {
    background: #03c03c;
    text-transform: uppercase;
    letter-spacing:  0.1rem;;
    cursor: pointer;
    transition: all 0.3s linear;
    color: white;
    font-weight: bold;
  }
  .submit-btn:hover {
   background-color: #ffc500;
    color: #0b1015;
  }
  @media (min-width: 900px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
    .form-input,
    .submit-btn {
    padding: 0.5rem 1rem;
    }
     @media (min-width: 1280px) {
    padding: 3rem 0;
  }
  }
`

export default NewsLetter