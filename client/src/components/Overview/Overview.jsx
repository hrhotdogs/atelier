import React from 'react';
import CurrentInfo from '../Context.jsx';


const Overview = () => {
  const currentState = React.useContext(CurrentInfo);
  let [currentProductID, setCurrentProductID] = currentState.currentProductID;
  let [currentStyleID, setCurrentStyleID] = currentState.currentStyleID;

  return (
    <div>Overview...{currentProductID}</div>

  )
}

export default Overview;


