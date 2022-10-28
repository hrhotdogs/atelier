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
  // const [isHover, setIsHover] = React.useState(true);

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
    relatedCarousel.current.scrollLeft = relatedCarousel.current.scrollLeft - 100;
  }

  // scroll right on right arrow click
  const handleScrollRight = (e) => {
    relatedCarousel.current.scrollLeft = relatedCarousel.current.scrollLeft + 100;
  }

  // scroll on hover... *************************************
  // const useHover = () => {
  //   const [value, setValue] = React.useState(false);
  //   const ref = React.useRef(null);
  //   const handleMouseOver = () => setValue(true);
  //   const handleMouseOut = () => setValue(false);
  //   React.useEffect(
  //     () => {
  //       const node = ref.current;
  //       if (node) {
  //         node.addEventListener("mouseenter", handleMouseOver);
  //         node.addEventListener("mouseleave", handleMouseOut);
  //         // return () => {
  //         //   node.removeEventListener("mouseenter", handleMouseOver);
  //         //   node.removeEventListener("mouseleave", handleMouseOut);
  //         // };
  //       }
  //     },
  //     [ref.current] // Recall only if ref changes
  //   );
  //   return [ref, value];
  // }

  // const timer = () => {
  //   setInterval(function() {
  //     relatedCarousel.current.scrollLeft = relatedCarousel.current.scrollLeft - 5;
  //   }, 30);
  // }

  // const [hoverRef, isHovered] = useHover();
  // // const [fxHover, setFxHover] = React.useState();
  // React.useEffect(() => {
  //   if (isHovered) {
  //     console.log('useEffect mounting');
  //     timer();
  //   }
  //   return () => {
  //     clearInterval(timer());
  //     console.log('useEffect unmounting');
  //   }
  // }, [isHovered])

  // scroll on hover... ****^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^

  // get rid of duplicate related products/related product id's that === global product id
  var sortedRelatedProducts = [];
  if (relatedProducts.length !== 0) {
    for (let i = 0; i < relatedProducts.length; i++) {
      sortedRelatedProducts[i] = relatedProducts[i];
    }
  }

  // create multiple cards from the related prod array, and pass each array value and its index to the child component
  return (
    <>
      <div className="scroller-left" onClick={event => {handleScrollLeft(event)}}>
        <span className="left-arrow">
          &#x2937;
        </span>
      </div>
      <ul ref={relatedCarousel} className="cards">
        {relatedProducts.length !== 0 ? relatedProducts.map((eachRelatedID, index) => {
          let dupeCounter = 0;
          for (let i = 0; i < sortedRelatedProducts.length; i++) {
            if (eachRelatedID === sortedRelatedProducts[i]) {
              dupeCounter++;
            }
            if (eachRelatedID === currentProductID) {
              dupeCounter += 2;
            }
          }
          if (dupeCounter < 2) {
            return(
              <EachRelatedCard relatedProduct={eachRelatedID} index={index} key={index}/>
            )
          } else {return null;}
        }) : null}
      </ul>
      <div className="scroller-right" onClick={event => {handleScrollRight(event)}}>
        <span className="right-arrow">&#x2937;</span>
      </div>
    </>
  );
};

export default RelatedCards;