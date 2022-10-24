import React from 'react';
import Axios from 'axios';
import { TOKEN } from '../../../../config.js';
import {ProductIDContext} from '../Context.jsx';
import {StyleIDContext} from '../StyleContext.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInfoSidebar from './ProductInfoSidebar.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ProductInfoFooter from './ProductInfoFooter.jsx';

const {useState, useEffect, useContext} = React;


const Overview = () => {

  // Get global state
  const { currentProductID, setCurrentProductID } = useContext(ProductIDContext);
  const { currentStyleID, setCurrentStyleID } = useContext(StyleIDContext);
  //let [currentProductID, setCurrentProductID] = currentState.currentProductID;
  //let [currentStyleID, setCurrentStyleID] = currentState.currentStyleID;

  // Create local state and global vars
  let [productInfo, setProductInfo] = useState({});
  let [styles, setStyles] = useState([]);
  let [ratings, setRatings] = useState({});

  // Image gallery state
  let [currentStyle, setCurrentStyle] = useState({photos: [{}]});

  // Get info from API when current product ID is updated
  useEffect(() => {
    // Get product info
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}`, {headers: {Authorization: TOKEN}})
      .then((response) => {setProductInfo(response.data)})
      .catch((err) => {console.log(err)});

    // Get styles info
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}/styles`, {headers: {Authorization: TOKEN}})
      .then(response => {
        setCurrentStyleID(parseInt(response.data.results[0].style_id));
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
    <div className='overview' style={{margin: '50px', marginBottom: '150px'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <ImageGallery currentStyle={currentStyle} />
        <div className = 'infoColumn' style={{display: 'flex', flexDirection: 'column', height: '675px', width: '300px', paddingLeft: '30px', paddingTop: '30px'}}>
          <ProductInfoSidebar ratings={ratings} productInfo={productInfo} currentStyle={currentStyle} />
          <StyleSelector styles={styles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} />
          <AddToCart currentStyle={currentStyle} />
        </div>
      </div>
      <ProductInfoFooter productInfo={productInfo} />
    </div>

  )
}

export default Overview;


