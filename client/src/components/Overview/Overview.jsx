import React from 'react';
import Axios from 'axios';
import {TOKEN} from '../../../../config.js';
import {ProductIDContext} from '../Context.jsx';

const {useState, useEffect} = React;


const Overview = () => {
  const { globalProductID, setGlobalProductID } = React.useContext(ProductIDContext);
  // let [currentProductID, setCurrentProductID] = currentState.currentProductID;
  let [currentStyle, setCurrentStyle] = React.useState({photos:[{thumbnail_url: ""}]});

  useEffect(() => {
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${globalProductID}/styles`, {headers: {Authorization: TOKEN}})
      .then(response => {setCurrentStyle(response.data.results[0])})
      .catch(err => console.log(err));
  }, [])

  return (
    <div>Overview...{console.log(currentStyle.photos[0])}
    <img src={currentStyle.photos[0].thumbnail_url} />
    </div>
  )
}

export default Overview;


