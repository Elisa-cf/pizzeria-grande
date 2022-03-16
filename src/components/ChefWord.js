import styled from 'styled-components';
import chef from '../images/chef.jpg'

const ChefWord = () => {
  return (
    <Wrapper className="main-section-center">
      <article>
        <img src={chef} alt="chef" className='main-img' />
      </article>
      <article>
        <div className='chef-title'>
          <h3>Chef's word</h3>
          <hr/>
        </div>
        <h2>What we believe in</h2>
        <blockquote>You don't have to cook fancy or complicated masterpieces, just good food from fresh ingredients.</blockquote>
        <h4>Antonio Carluccio</h4>
        <h5>Chef and founder</h5>
        <p>Antonio Carluccio</p>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
display: flex;
flex-direction: column;
margin-bottom: 2rem;
.main-img{
  width:100%;
  height: 400px;
  position: relative;
  display: block;
  object-fit: cover;
  margin: 2rem 0rem;
}
.chef-title{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
h3 {
  margin-bottom: 0.3rem;
}
hr {
  width: 8rem;
  height: 0.2rem;
  background: #ffc500;
  border-style: none;
  margin-bottom: 1.5rem;
}
h2{
 margin-bottom: 1.4rem;
}
blockquote::before {
  content: open-quote;
  font-size: 2rem;
}
blockquote::after {
  content: close-quote;
    font-size: 2rem;
}
blockquote {
  quotes: "“" "”" "“" "”";
  font-size: 30px;
  padding-bottom: 20px;
  text-align: start;
}
h5{
 margin-bottom: 2rem;
}
p{
 font-family: 'Allura', cursive;
 font-size: 1.8rem;
 }
 @media (min-width: 450px) {
   .main-img{
     min-height: 500px;
    }
@media (min-width: 800px) {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  hr {
    width: 10rem;
  }
  h1 {
    margin-bottom: 2rem;
  }
  .main-img{
    min-height: 400px;
  }
}
`
export default ChefWord
