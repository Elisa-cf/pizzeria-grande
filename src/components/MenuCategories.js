import styled from 'styled-components';
import React, { useState } from 'react';

const ButtonToggle = styled.button`
  background: transparent;
  border-color: transparent;
  font-size: 1.2rem;
  text-transform: capitalize;
  margin: 0 0.5rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  color: #0b1015;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s linear;
  border-radius: 0.25rem;
  ${({ active }) =>
        active &&
        `
    background: #03c03c;
  color: white;
  `}
`;
const ButtonGroup = styled.div`
   margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MenuCategories = ({ categories, setSelectedCategory}) => {
    const [active, setActive] = useState(categories[0]);

    const handleClick = (category) => {
        // modify the state value
        setSelectedCategory(category)
        setActive(category)
    }
    return (
        <ButtonGroup>
            {categories.map((category, index) => {  
                   return (  <ButtonToggle
                    key={index}
                    active={active === category}
                    onClick={() => handleClick(category)}
                    >
                    {category}
                    </ButtonToggle>
            );
            })}
        </ButtonGroup>
    );
};

export default MenuCategories