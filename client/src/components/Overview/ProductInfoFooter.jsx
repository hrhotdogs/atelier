import React from 'react';

const ProductInfoFooter = ({productInfo}) => {
  return (
    <div className='productInfoFooter'>
      {productInfo.slogan}
    </div>
  )
}

export default ProductInfoFooter;