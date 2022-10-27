import React from 'react';
import StarRating from '../Ratings/StarRating.jsx';
const {useState, useEffect} = React;

const ProductInfoSidebar = ({metaData, listOfReviews, productInfo, currentStyle}) => {

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');

  useEffect(() => {
    setProductName(productInfo.name);
  }, [productInfo])

  /*useEffect(() => {
    // Set price
    if (currentStyle.sale_price) {
      setPrice(currentStyle.sale_price);
    } else {
      setPrice(currentStyle.original_price);
    }
  }, [currentStyle])*/

  const showPrice = () => {
    if (currentStyle.sale_price) {
      return (
        <div className='sidebarPriceContainer'>
          <span className='sidebarPrice saleNew'>{`$${currentStyle.sale_price}  `}</span>
          <span className='sidebarPrice saleOriginal'>{`$${currentStyle.original_price}`}</span>
        </div>
      )
    } else {
      return (
        <div className='sidebarPriceContainer'>
          <span className='sidebarPrice'>{`$${currentStyle.original_price}`}</span>
        </div>
      )
    }
  }

  return (
    <div>
      <div id='sidebarReviewInfo'>
        <StarRating metaData={metaData} listOfReviews={listOfReviews} />
        <a href="#sortMenu">{`See all ${listOfReviews.length} reviews`}</a>
      </div>
      <div className='sidebarProductTitle'>{productName}</div>
      <div>{showPrice()}</div>
    </div>
  )
}

export default ProductInfoSidebar;