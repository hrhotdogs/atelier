import React from 'react';
import EachOutfitCard from './EachOutfitCard.jsx';

const PopulateOutfits = ({renderOutfit}) => {
  const [outfitsList, setOutfitsList] = React.useState([]);

  React.useEffect(() => {
    var parse = JSON.parse(window.localStorage.getItem("outfits"))
    setOutfitsList(parse);
    return () => {
    }
  }, [renderOutfit]);

  return (
    <ul className="cards">
      {outfitsList !== null ? outfitsList.map((eachOutfit, index) => {
        return(
          <EachOutfitCard outfit={eachOutfit} key={index} setOutfitsList={setOutfitsList}/>
        )}
      ) : null}
    </ul>
  );
};

export default PopulateOutfits;