import React from 'react';
import Axios from 'axios';
import { TOKEN } from '../../../../config.js';
import CurrentInfo from '../Context.jsx';
import ImageGallery from './ImageGallery.jsx'
import ProductInfoSidebar from './ProductInfoSidebar.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ProductInfoFooter from './ProductInfoFooter.jsx'

const {useState, useEffect} = React;


const Overview = () => {

  // Get global state
  const currentState = React.useContext(CurrentInfo);
  let [currentProductID, setCurrentProductID] = currentState.currentProductID;
  let [currentStyleID, setCurrentStyleID] = currentState.currentStyleID;

  // Create local state and global vars
  let [productInfo, setProductInfo] = useState({});
  let [styles, setStyles] = useState([]);
  let [currentStyle, setCurrentStyle] = useState('');
  let [ratings, setRatings] = useState({});

  // Get info from API when current product ID is updated
  useEffect(() => {
    // Get product info
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}`, {headers: {Authorization: TOKEN}})
      .then((response) => {setProductInfo(response.data)})
      .catch((err) => {console.log(err)});

    // Get styles info
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}/styles`, {headers: {Authorization: TOKEN}})
      .then(response => {
        setCurrentStyleID(response.data.results[0].style_id);
        setCurrentStyle(response.data.results[0]);
        setStyles(response.data.results.slice());
      })
      .catch(err => console.log(err));

    // Get review metadata
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${currentProductID}`, {headers: {Authorization: TOKEN}})
      .then((response) => {setRatings(response.data.ratings)})
      .catch((err) => console.log(err));
  }, [currentProductID]);

  // Render
  return (
    <div>
      Overview
      <ImageGallery currentStyle={currentStyle} />
      <ProductInfoSidebar ratings={ratings} productInfo={productInfo} currentStyle={currentStyle} />
      <StyleSelector styles={styles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} />
      <AddToCart currentStyle={currentStyle} />
      <ProductInfoFooter productInfo={productInfo} />
    </div>

  )
}

export default Overview;


