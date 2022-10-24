import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import { ProductIDContext } from '../Context.jsx';
import NewReview from './NewReview.jsx';
import ReviewList from './ReviewList.jsx';
import SideBar from './SideBar.jsx';

const Ratings = () => {
  const { currentProductID, setCurrentProductID } =
    useContext(ProductIDContext);

  const [listValue, setListValue] = useState('set_one');
  const [listOfReviews, setListOfReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [metaData, setMetaData] = useState({});
  const [metaDataProductID, setMetaDataProductID] = useState(currentProductID);
  useEffect(() => {
    axios
      .get(
        ` https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?page&count&sort=relevant&product_id=${currentProductID}`,
        { headers: { Authorization: `${TOKEN}` } }
      )
      .then((results) => {
        setCurrentProductID(results.data.product);
        setListOfReviews(results.data.results);
      })
      .catch((error) => console.log(error));
  }, [currentProductID]);

  useEffect(() => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${currentProductID}`,
        { headers: { Authorization: `${TOKEN}` } }
      )
      .then((results) => {
        setMetaDataProductID(results.data.product_id);
        setMetaData(results.data);
      })
      .catch((error) => console.log(error));
  }, [currentProductID]);

  return (
    <>
      <div className='review-list'>
        <ReviewList
          listOfReviews={listOfReviews}
          listValue={listValue}
          setListValue={setListValue}
        />
      </div>

      <div className='side-bar'>
        <SideBar metaData={metaData} listOfReviews={listOfReviews} />
      </div>

      <div>
        {' '}
        <button
          className='review-btn add-review'
          onClick={() => setShowModal(true)}
        >
          New Review
        </button>
        <NewReview
          showModal={showModal}
          setShowModal={setShowModal}
          currentProductID={currentProductID}
          metaData={metaData}
        ></NewReview>{' '}
      </div>
    </>
  );
};

export default Ratings;
