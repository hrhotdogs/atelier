import React from 'react';

const ProductInfoFooter = ({productInfo}) => {
  return (
    <div className='productInfoFooter'>
      <div className='productInfoFooterLeft'>
        <div className='productSlogan'>{productInfo.slogan}</div>
        <div className='productDescription'>{productInfo.description}</div>
      </div>
    </div>
  )
}

export default ProductInfoFooter;