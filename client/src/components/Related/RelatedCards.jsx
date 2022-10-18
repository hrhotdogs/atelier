import React from 'react';
import Axios from 'axios';
import CurrentInfo from '../Context.jsx';
import EachRelatedCard from './EachRelatedCard.jsx';
import {TOKEN} from '../../../../config.js';
import {ProductIDContext} from '../Context.jsx';


const RelatedCards = ( props ) => {
  // props.relatedProductList = array of related product_id's
  // props.setCurrentProductID = a function with a number input to change global current product_ID
      // **** CALLING THIS F(x) RE-RENDERS APP.JSX

  /* *************************************
    - access to the global state variable, use productID
    - set the Global state variable, use setProductID()
--- Put the line below in consumers with the Context import from line 6 ----
    const { productID, setProductID } = React.useContext(ProductIDContext);
//********************************************* */

  const { productID, setProductID } = React.useContext(ProductIDContext);

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