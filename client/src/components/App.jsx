import React from 'react';
import Axios from 'axios';
import {TOKEN} from '../../../config.js'
import Overview from './Overview/Overview.jsx';
import Related from './Related/Related.jsx';
import Questions from './Questions/Questions.jsx';
import Ratings from './Ratings/Ratings.jsx';
import CurrentInfo from './Context.jsx'
const {useState, useEffect} = React;

const App = () => {

  // Global state setup
  let [currentProductID, setCurrentProductID] = useState(40348);
  let [currentStyleID, setCurrentStyleID] = useState(240525);
  let currentState = {};
  currentState.currentProductID = [currentProductID, setCurrentProductID];
  currentState.currentStyleID = [currentStyleID, setCurrentStyleID];

  // Render components with context (global state)
  return (
    <CurrentInfo.Provider value={currentState}>
      <Overview />
      <Related />
      <Questions />
      <Ratings />
    </CurrentInfo.Provider>
  )
}

export default App;