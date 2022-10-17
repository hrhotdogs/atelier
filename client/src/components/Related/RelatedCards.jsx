import React from 'react';
import Axios from 'axios';
import CurrentInfo from '../Context.jsx';
import EachRelatedCard from './EachRelatedCard.jsx';
import {TOKEN} from '../../../../config.js';


const RelatedCards = ( props ) => {
  // props.relatedProductList = array of related product_id's
  // props.setCurrentProductID = a function with a number input to change global current product_ID
      // **** CALLING THIS F(x) RE-RENDERS APP.JSX

  const currentState = React.useContext(CurrentInfo);

  let [currentProductID, setCurrentProductID] = currentState.currentProductID;
  let [currentStyleID, setCurrentStyleID] = currentState.currentStyleID;

  const [relatedProducts, setRelatedProducts] = React.useState([]);

  React.useEffect(()=> {
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/?product_id=${props.setCurrentProductID}`, { headers: { "Authorization": `${TOKEN}` } })
    .then( (res) => {
      setRelatedProducts(res.data);
    })
    .catch( (err) => {
      console.log(err);
    });
  }, [currentState.currentProductID[0]]);


    // props for eachRelatedCard = setCurrentProductID={props.setCurrentProductID} relatedProduct={eachRelatedProduct}
  return (
    <div>
      <p></p>
      Click Any name/id below to change the Global currentProductID context/useState
      {relatedProducts.map((eachRelatedProduct) =>
        <EachRelatedCard setCurrentProductID={props.setCurrentProductID} relatedProduct={eachRelatedProduct}/>
      )}
    </div>
  );
};

export default RelatedCards;