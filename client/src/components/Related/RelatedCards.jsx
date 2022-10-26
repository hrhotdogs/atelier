import React from 'react';
import Axios from 'axios';
import EachRelatedCard from './EachRelatedCard.jsx';
import {TOKEN} from '../../../../config.js';
import {ProductIDContext} from '../Context.jsx';


const RelatedCards = () => {
  // Global product id context, use the set fx to set this global context within child components
  const { currentProductID, setCurrentProductID } = React.useContext(ProductIDContext);

  // rerender on change to the related products array derived from the API
  const [relatedProducts, setRelatedProducts] = React.useState([]);

  // GET req to API for the related products array on change of the global context
  // Pass this array for rendering by setting the component's state
  React.useEffect(()=> {
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}/related`, { headers: { "Authorization": `${TOKEN}` } })
      .then( (res) => {
        setRelatedProducts(res.data);
      })
      .catch((err) => {});
  }, [currentProductID]);

  // reference the carousal (.cards) to get its scroll properties
  const carouselElem = useRef(null);

  // create multiple cards from the related prod array, and pass each array value and its index to the child component
  return (
    <ul ref={} className="cards">
      <div className="scroller-left">&#62;</div>
      {relatedProducts.length !== 0 ? relatedProducts.map((eachRelatedID, index) => {
        return(
          <EachRelatedCard relatedProduct={eachRelatedID} index={index} key={index}/>
        )}
      ) : null}
      <div className="scroller-right">&#62;</div>
    </ul>
  );
};

export default RelatedCards;