import React from 'react';
import Axios from 'axios';
import {TOKEN} from '../../../config.js'
import ProductIDProvider from './Context.jsx';
import {ProductIDContext} from './Context.jsx';
import StyleIDProvider from './StyleContext.jsx';
import {StyleIDContext} from './StyleContext.jsx'
import Overview from './Overview/Overview.jsx';
import Related from './Related/Related.jsx';
import Questions from './Questions/Questions.jsx';
import Ratings from './Ratings/Ratings.jsx';
//const {useState, useEffect} = React;

const App = () => {

  // Global state setup
  // const [currentProductID, setCurrentProductID] = React.useState(40348);
  // const [currentStyleID, setCurrentStyleID] = React.useState(240525);
  // const currentState = {
  //   currentProductID: [currentProductID, setCurrentProductID],
  //   currentStyleID: [currentStyleID, setCurrentStyleID]
  // };

  // Render components with context (global state)
  return (
    <ProductIDProvider>
      <StyleIDProvider>
        <Overview />
        <Related />
      </StyleIDProvider>
      <Questions />
      <Ratings />
    </ProductIDProvider>
  )
}

export default App;