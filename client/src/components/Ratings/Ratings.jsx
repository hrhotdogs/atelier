import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import { ProductIDContext } from '../Context.jsx';
import ReviewTile from './ReviewTile.jsx';

const Ratings = () => {
  const { currentProductID, setCurrentProductID } =
    useContext(ProductIDContext);

  const [listOfReviews, setListOfReviews] = useState([]);

  useEffect(() => {
    axios
      .get(
        ` https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?page&count&sort=relevant&product_id=${currentProductID}`,
        { headers: { Authorization: `${TOKEN}` } }
      )
      .then((results) => {
        setCurrentProductID(results.data.product);
        setListOfReviews(results.data.results);
        console.log(results.data.results);
      })
      .catch((error) => console.log(error));
  }, [currentProductID]);

  return (
    <div>
      {listOfReviews.map((review, index) => (
        <ReviewTile review={review} key={index} />
      ))}
    </div>
  );
};

export default Ratings;
