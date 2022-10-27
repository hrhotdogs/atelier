import React from 'react';
import Axios from 'axios';
import { TOKEN } from '../../../../config.js';
const {useState, useEffect} = React;
const AddToCart = ({currentStyle}) => {

  const [selectedSize, setSelectedSize] = useState('Select size');
  const [selectedQty, setSelectedQty] = useState(1);
  const [inStock, setInStock] = useState(true);

  const handleOptionChange = (e, comp) => {
    if (comp === 'size') {
      setSelectedSize(e.target.value);
      setSelectedQty(1);
    } else if (comp === 'qty') {
      setSelectedQty(e.target.value);
    }
  }

  const handleAddToCart = () => {
    const sku = Object.keys(currentStyle.skus).find(key => currentStyle.skus[key].size === selectedSize);
    console.log(sku);
    for (let i = 0; i < selectedQty; i++) {
      Axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart`, {sku_id: sku}, {headers: {Authorization: TOKEN}})
      .catch(err => console.log(err));
    }
  }

  const sizes = [];
  const quantities = {};
  for (let sku in currentStyle.skus) {
    if (!(sizes.includes(currentStyle.skus[sku].size))) {
      sizes.push(currentStyle.skus[sku].size);
    }
    if (!(quantities.hasOwnProperty(currentStyle.skus[sku].size))) {
      quantities[currentStyle.skus[sku].size] = currentStyle.skus[sku].quantity;
    } else {
      quantities[currentStyle.skus[sku].size] += currentStyle.skus[sku].quantity;
    }
  }

  const getQuantityRange = () => {
    const qty = quantities[selectedSize];
    if (qty < 1) {
      setInStock(false);
    }
    const range = [];
    let max;
    if (qty < 15) {
      max = qty;
    } else {
      max = 15;
    }
    for (let i = 1; i <= max; i++) {
      range.push(i);
    }
    return range;
  }

  const showAddButton = () => {
    if (inStock) {
      return (
        <button className='btn addToCartButton' onClick={handleAddToCart}>Add to cart</button>
      )
    }
  }

  useEffect(() => {
    setSelectedSize('Select size');
    setSelectedQty(1);
  }, [currentStyle])

  return (
    <div className='addToCartContainer'>
      <div className='cartRow'>
        <div className='sort-menu' style={{marginLeft: '0', marginTop: '0'}}>
          <select className='sort-options' id='sizeSort' value={selectedSize} onChange={(e) => handleOptionChange(e, 'size')}>
            <option disabled hidden>Select size</option>
            {sizes.map((size, index) => (
              <option value={size} key={index}>{size}</option>
            ))}
          </select>
        </div>
        <div className='sort-menu' style={{marginLeft: '20px', marginTop: '0'}}>
          <select className='sort-options' id='qtySort' value={selectedQty} onChange={(e) => handleOptionChange(e, 'qty')}>
              {getQuantityRange().map((qty, index) => (
                <option value={qty} key={index}>{qty}</option>
              ))}
          </select>
        </div>
      </div>
      {showAddButton()}
    </div>
  )
}

export default AddToCart;