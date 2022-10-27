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
  const relatedCarousel = React.useRef(null);

  // scroll left on left arrow click
  const handleScrollLeft = (e) => {
    relatedCarousel.current.scrollLeft = relatedCarousel.current.scrollLeft - 50;
  }

  // scroll right on right arrow click
  const handleScrollRight = (e) => {
    relatedCarousel.current.scrollLeft = relatedCarousel.current.scrollLeft + 50;
  }

  // create multiple cards from the related prod array, and pass each array value and its index to the child component
  return (
    <>
      <div className="scroller-left" onClick={event => {handleScrollLeft(event)}}><span className="left-arrow">&#62;</span></div>
      <ul ref={relatedCarousel} className="cards">
        {relatedProducts.length !== 0 ? relatedProducts.map((eachRelatedID, index) => {
          return(
            <EachRelatedCard relatedProduct={eachRelatedID} index={index} key={index}/>
          )}
        ) : null}
      </ul>
      <div className="scroller-right" onClick={event => {handleScrollRight(event)}}>
        <span className="right-arrow">&#62;</span>
      </div>
    </>
  );
};

export default RelatedCards;