import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import { ProductIDContext } from '../Context.jsx';
import NewReview from './NewReview.jsx';
import ReviewList from './ReviewList.jsx';
import SideBar from './SideBar.jsx';
import { format, parseISO } from 'date-fns';

const Ratings = () => {
  const { currentProductID, setCurrentProductID } =
    useContext(ProductIDContext);

  const [listValue, setListValue] = useState('set_one');
  const [listOfReviews, setListOfReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [metaData, setMetaData] = useState({});
  const [metaDataProductID, setMetaDataProductID] = useState(currentProductID);
  const [option, setOption] = useState('');

  useEffect(() => {
    axios
      .get(
        ` https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?page&count=50&sort=relevant&product_id=${currentProductID}`,
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

  const helpfulnessSort = () => {
    let helpfulReviews = listOfReviews.slice();
    helpfulReviews.sort((a, b) => (a.helpfulness < b.helpfulness ? 1 : -1));
    setListOfReviews(helpfulReviews);
  };

  const newestSort = () => {
    let newestReviews = listOfReviews.slice();
    newestReviews.sort((a, b) => (a.date < b.date ? 1 : -1));
    setListOfReviews(newestReviews);
  };

  const changeOption = (e) => {
    if (e.target.value === 'Helpfulness') {
      helpfulnessSort();
    } else if (e.target.value === 'Newest') {
      newestSort();
    } else {
      setListOfReviews(listOfReviews);
    }
    setOption(e.target.value);
  };

  return (
    <>
      <label id='sort-menu' htmlFor='sort-options'>
        &nbsp; Sort {listOfReviews.length} reviews by :
        <select
          value={option}
          onChange={changeOption}
          name='sort-options'
          id='sort-options'
        >
          <option value='Relevance'>Relevance</option>
          <option value='Helpfulness'>Helpfulness</option>
          <option value='Newest'>Newest</option>
        </select>
      </label>
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
