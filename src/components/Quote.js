import React from 'react';
import styled from 'styled-components';

const quote = () => {
  return (

    <WrapperQuote>
      <div>
        <blockquote>I had a dream, to bring back the flavours,
          sensations and smells of southern
          of Italy to Munich</blockquote>
        <hr className='quote-line' />
      </div>
    </WrapperQuote>
  )
}

const WrapperQuote = styled.section`
display: flex;
justify-content: center;
align-items: center;
align-text:center;
color: #0b1015;
margin: 4rem auto;

div {
width: 90%;
@media screen and (min-width: 768px){
width: 80%;
}
@media screen and (min-width: 1024px){
width: 55%;
}
}
  
blockquote::before {
  content: open-quote;
}
blockquote::after {
  content: close-quote;
}
blockquote {
  quotes: "“" "”" "“" "”";
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;
  text-align: center;
}
.quote-line {
  border:none;
  height: 20px;
 	max-width: 80%;
	height: 50px;
	margin-top: 0;
	box-shadow: 0 20px 20px -20px #333;
  margin: -50px auto 10px; 
}


@media screen and (min-width: 450px){
blockquote {
font-size: 35px;
}
@media screen and (min-width: 800px){
blockquote {
font-size: 40px;
}
@media screen and (min-width: 1024px){
blockquote {
font-size: 45px;
}
`

export default quote