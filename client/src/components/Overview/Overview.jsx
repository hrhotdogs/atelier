import React from 'react';
import Axios from 'axios';
import {TOKEN} from '../../../../config.js';
import {ProductIDContext} from '../Context.jsx';

const {useState, useEffect} = React;


const Overview = () => {
  const {globalProductID, globalSetProductID} = React.useContext(ProductIDContext);

  // let [currentProductID, setCurrentProductID] = currentState.currentProductID;
  // let [currentStyleID, setCurrentStyleID] = currentState.currentStyleID;

  // useEffect(() => {
  //   Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}/styles`, {headers: {Authorization: TOKEN}})
  //     .then(response => {setCurrentStyleID(response.data.results[0].style_id)})
  //     .catch(err => console.log(err));
  // }, [currentProductID])

  return (
    <div>Overview...</div>
  )
}

export default Overview;


