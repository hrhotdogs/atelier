import React from 'react';
import Axios from 'axios';
import Overview from './Overview/Overview.jsx';
import Related from './Related/Related.jsx';
import Questions from './Questions/Questions.jsx';
import Ratings from './Ratings/Ratings.jsx';
import CurrentInfo from './Context.jsx'
const {useState} = React;

const App = () => {
  let [currentProductID, setCurrentProductID] = useState(40344);
  let [currentStyleID, setCurrentStyleID] = useState(1);

  let currentState = {}
  currentState.currentProductID = [currentProductID, setCurrentProductID];
  currentState.currentStyleID = [currentStyleID, setCurrentStyleID];

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