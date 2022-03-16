import '../InteractiveBtn.css';
import { useState } from "react";
import styled from 'styled-components';

const AddToCartButton = ({ index, handleAddProduct }) => {
    const [added, setAdded] = useState(false);

    const toggleAdded = () => {
        setAdded(prevState => !prevState)
    }

    const handleClick = () => {
        if (!added) handleAddProduct(index);
        toggleAdded()
        console.log(index);
    }
    return (
        <AddToCartBtn
            onClick={handleClick}
            className={added ? "add-to-cart added" : "add-to-cart"}
        >
            <div className="default">Add to Cart</div>
            <div className="success">Order more?</div>
            <div className="cart">
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="dots"></div>
        </AddToCartBtn>
    )
}
const AddToCartBtn = styled.button`

`

export default AddToCartButton