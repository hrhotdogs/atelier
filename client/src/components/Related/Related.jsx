import React from 'react';
import Axios from 'axios';
import CurrentInfo from '../Context.jsx';

const Related = () => {

  const currentState = React.useContext(CurrentInfo);
  let [currentProductID, setCurrentProductID] = currentState.currentProductID;
  let [currentStyleID, setCurrentStyleID] = currentState.currentStyleID;

  return (
    <div>Related...{currentState}</div>
  )
}

export default Related;