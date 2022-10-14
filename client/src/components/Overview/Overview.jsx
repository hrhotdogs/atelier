import React from 'react';
import Axios from 'axios';
import {TOKEN} from '../../../../config.js';
import CurrentInfo from '../Context.jsx';
import ImageGallery from './ImageGallery.jsx'
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const {useState, useEffect} = React;


const Overview = () => {

  // Get global state
  const currentState = React.useContext(CurrentInfo);
  let [currentProductID, setCurrentProductID] = currentState.currentProductID;
  let [currentStyleID, setCurrentStyleID] = currentState.currentStyleID;

  // Create local state and global vars
  const styles = [];

  // Get style info from API when productID updates

  useEffect(() => {
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}/styles`, {headers: {Authorization: TOKEN}})
      .then(response => {
        setCurrentStyleID(response.data.results[0].style_id);
        response.data.results.forEach((style) => {styles.push(style)});
      })
      .catch(err => console.log(err));
    // API call for review info

  }, [currentProductID]);

  // Render
  return (
    <div>
      Overview
      <ImageGallery />
      <ProductInfo />
      <StyleSelector />
      <AddToCart />
    </div>

  )
}

export default Overview;


