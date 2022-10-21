import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import { ProductIDContext } from '../Context.jsx';
import NewReview from './NewReview.jsx';
import ReviewList from './ReviewList.jsx';

const Ratings = () => {
  const { currentProductID, setCurrentProductID } =
    useContext(ProductIDContext);
  const [listValue, setListValue] = useState('set_one');
  const [listOfReviews, setListOfReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [metaProductId, setMetaProductId] = useState(null);

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

  useEffect(() => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${currentProductID}`,
        { headers: { Authorization: `${TOKEN}` } }
      )
      .then((results) => console.log('THIS IS THE META RESULTS', results.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ReviewList
        listOfReviews={listOfReviews}
        listValue={listValue}
        setListValue={setListValue}
      />
      <div>
        {' '}
        <button onClick={() => setShowModal(true)}>New Review</button>
        <NewReview
          showModal={showModal}
          setShowModal={setShowModal}
          currentProductID={currentProductID}
        ></NewReview>{' '}
      </div>
    </>
  );
};

export default Ratings;
