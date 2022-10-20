import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import { ProductIDContext } from '../Context.jsx';
import ReviewTile from './ReviewTile.jsx';

const Ratings = () => {
  const { currentProductID, setCurrentProductID } =
    useContext(ProductIDContext);
  const [listValue, setListValue] = useState('set_one');
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

  const firstSet = listOfReviews.slice(0, 2);
  const secondSet = listOfReviews.slice(0, 4);

  switch (listValue) {
    case 'set_one':
      return (
        <>
          <div>
            {firstSet.map((review, index) => (
              <ReviewTile review={review} key={index} />
            ))}
          </div>
          <button onClick={() => setListValue('set_two')}>load more...</button>
        </>
      );
      break;
    case 'set_two':
      return (
        <>
          <div>
            {secondSet.map((review, index) => (
              <ReviewTile review={review} key={index} />
            ))}
          </div>
          <button onClick={() => setListValue('all')}>load more...</button>
        </>
      );
      break;
    case 'all':
      return (
        <>
          <div>
            {listOfReviews.map((review, index) => (
              <ReviewTile review={review} key={index} />
            ))}
          </div>
          <button onClick={() => setListValue('set_one')}>show less</button>
        </>
      );
      break;
    default:
      break;
  }
};

export default Ratings;
