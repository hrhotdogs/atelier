import React from 'react';
import StarRating from '../Ratings/StarRating.jsx';
const {useState, useEffect} = React;

const ProductInfoSidebar = ({metaData, listOfReviews, productInfo, currentStyle}) => {

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('')

  useEffect(() => {
    setProductName(productInfo.name);
  }, [productInfo])

  useEffect(() => {
    // Set price
    if (currentStyle.sale_price) {
      setPrice(currentStyle.sale_price);
    } else {
      setPrice(currentStyle.original_price);
    }
  }, [currentStyle])

  return (
    <div>
      <StarRating metaData={metaData} listOfReviews={listOfReviews} />
      <div id='sidebarProductTitle'>{productName}</div>
      <div id='sidebarPrice'>{`$${price}`}</div>
    </div>
  )
}

export default ProductInfoSidebar;