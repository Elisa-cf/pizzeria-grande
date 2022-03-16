import styled from 'styled-components';
import pizzeria4 from '../images/pizzeria-4.jpg'

const AboutTheResto = () => {
  return (
    <>
      <Wrapper className='section-center'>
        <article>
          <div className='resto-title'>
            <h2>Experience authentic Italy and taste wood-fired pizzas</h2>
            <p>At la Pizzeria Grande we prepare all our dishes with the best products, without losing the essence of tradition of our land. Throughout our menu you will find a wide variety of authentic dishes, original regional suggestions that will surprise and captivate you.</p>
          </div>
        </article>
        <article>
          <img src={pizzeria4} alt="ingredients" className='main-img' />
        </article>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
display: flex;
flex-direction: column;
h2{
  margin-bottom: 1.4rem;
}
p {
max-width: 45em;
text-align: start;
}
.main-img{
  width:100%;
  height: 300px;
  position: relative;
  display: block;
  object-fit: cover;
  margin: 2rem 0rem;
}
@media (min-width: 900px) {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  h2 {
    margin-bottom: 2rem;
  }
}
`
export default AboutTheResto