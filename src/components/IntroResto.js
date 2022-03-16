import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pizzeria1 from '../images/pizzeria-1.jpg'
import pizzeria2 from '../images/pizzeria-2.jpg'

const IntroResto = () => {
  return (
    <>
      <Wrapper>
        <article>
          <h1>Original dishes, with the most authentic Italian flavour.</h1>
          <p>An extensive menu with authentic dishes but with our own touch of fantasy and originality is what allows us to surprise our guests on every visit. It doesn't matter if you fancy pizza, one of our many starters or a delicious pasta. We are always ready to give our best in every dish.</p>
          <Link to="/menu" className='btn'>Our menu</Link>
        </article>
        <article className="img-container">
          <img src={pizzeria1} alt="ingredients" className='main-img' />
        </article>
        <article>
          <h1>We will simply make you fall in love with our pizzas.</h1>
          <p>If you already know us, we are sure that you won't let much time pass before your next visit and we are looking forward to making you fall in love with us a little more. If you have not yet come to try our dishes, we invite you to do so and let us make you travel through the senses.</p>
          <Link to="/about" className='btn'>our history</Link>
        </article>
        <article className="img-container">
          <img src={pizzeria2} alt="ingredients" className='main-img' />
        </article>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
display: flex;
flex-direction: column;
margin-bottom: 2rem;
width: 90vw;
margin: 0 auto;
max-width: 1170px;
p{
max-width: 45em;
text-align: start;
}
.main-img{
  width:100%;
  max-height: 350px;
  position: relative;
  display: block;
  object-fit: cover;
  margin: 2rem 0rem;
}
.btn{
  margin-top: 0.5rem;
}
@media (min-width: 900px) {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  h1{
    margin-bottom: 2rem;
  }
  .btn{
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
  .main-img{
    min-height: 400px;
  }
}
`
export default IntroResto