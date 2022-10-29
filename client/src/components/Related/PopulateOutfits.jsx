import React from 'react';
import EachOutfitCard from './EachOutfitCard.jsx';

const PopulateOutfits = ({renderOutfit}) => {
  const [outfitsList, setOutfitsList] = React.useState([]);

  // reference the carousal (.cards) to get its scroll properties
  const outfitsCarousel = React.useRef(null);

  React.useEffect(() => {
    var parse = JSON.parse(window.localStorage.getItem("outfits"));
    setOutfitsList(parse);
    return () => {
    }
  }, [renderOutfit]);

  // scroll left on left arrow click
  const handleScrollLeft = (e) => {
    outfitsCarousel.current.scrollLeft = outfitsCarousel.current.scrollLeft - 100;
  }
  // scroll right on right arrow click
  const handleScrollRight = (e) => {
    outfitsCarousel.current.scrollLeft = outfitsCarousel.current.scrollLeft + 100;
  }

  return (
    <>
      <div className="scroller-left" onClick={event => {handleScrollLeft(event)}}>
        <span className="left-arrow">&#x2937;</span>
      </div>
      <ul ref={outfitsCarousel} className="cards">
        {outfitsList !== null ? outfitsList.map((eachOutfit, index) => {
          return(
            <EachOutfitCard outfit={eachOutfit} key={index} setOutfitsList={setOutfitsList} outfitsCarousel={outfitsCarousel}/>
          )}
        ) : null}
      </ul>
      <div className="scroller-right" onClick={event => {handleScrollRight(event)}}>
        <span className="right-arrow">&#x2937;</span>
      </div>
    </>
  );
};

export default PopulateOutfits;