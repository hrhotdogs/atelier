import React from 'react';
const {useState} = React;
const AddToCart = ({currentStyle}) => {

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQty, setSelectedQty] = useState(1);

  return (
    <div className='addToCartContainer'>
      <div className='cartRow'>
        <select>

        </select>
        <select>

        </select>
      </div>

    </div>
  )
}

export default AddToCart;