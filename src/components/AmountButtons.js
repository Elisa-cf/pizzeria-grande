import React from 'react' 
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountsButtons = ({ increase, decrease, amount, handleAddProduct, items}) => {
  return (
    <Wrapper>
      <button type="button" onClick={decrease}><FaMinus/></button>
      <h2 className='amount'>{amount}</h2>
      <button type="button" onClick={increase}><FaPlus /></button>

      {/* <button type="button" onClick={() => handleAddProduct(items)}><FaPlus/></button>  */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: baseline;
  border: solid 1px;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .amount {
    margin-bottom: 0;
    font-size: 2rem;
  }
`

export default AmountsButtons