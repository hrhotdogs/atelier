import React from 'react';
import EachOutfitCard from './EachOutfitCard.jsx';

const PopulateOutfits = () => {
  const [outfitsList, setOutfitsList] = React.useState([]);

  React.useEffect(() => {
    var parse = JSON.parse(window.localStorage.getItem("outfits"))
    setOutfitsList(parse);
    return () => {
    }
  }, []);

  if (outfitsList === null) {
    return null;
  } else {
    return (
      <>
        {outfitsList.map((eachOutfit, index) => {
          return(
            <EachOutfitCard outfit={eachOutfit} key={index}/>
          )
          })
        }
      </>
    );
  }
};

export default PopulateOutfits;