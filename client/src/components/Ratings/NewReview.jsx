import React, { useState, useRef } from 'react';
import ReactDom from 'react-dom';
import RadioButtons from './RadioButtons.jsx';
import RadioStarRating from './RadioStarRating.jsx';
import ReviewPhotoUpload from './ReviewPhotoUpload.jsx';
import { TOKEN } from '../../../../config.js';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const NewReview = ({ showModal, setShowModal, currentProductID, metaData }) => {
  const summaryRef = useRef();
  const bodyRef = useRef();
  const nicknameRef = useRef();
  const emailRef = useRef();

  const [selectedSizeRating, setSelectedSizeRating] = useState(null);
  const [selectedLengthRating, setSelectedLengthRating] = useState(null);
  const [selectedWidthRating, setSelectedWidthRating] = useState(null);
  const [selectedFitRating, setSelectedFitRating] = useState(null);
  const [selectedComfortRating, setSelectedComfortRating] = useState(null);
  const [selectedQualityRating, setSelectedQualityRating] = useState(null);

  const [selectedStarRating, setSelectedStarRating] = useState(0);
  const [selectedRecommend, setSelectedRecommend] = useState(false);
  const [photos, setPhotos] = useState([]);
  const values = {};

  if (metaData.characteristics !== undefined) {
    for (let key in metaData.characteristics) {
      values[key] = metaData.characteristics[key].id;
    }
  }

  const handleReviewSubmission = (e) => {
    e.preventDefault();
    let form = {
      product_id: Number(currentProductID),
      rating: Number(selectedStarRating),
      summary: summaryRef.current.value,
      body: bodyRef.current.value,
      recommend: selectedRecommend,
      name: nicknameRef.current.value,
      email: emailRef.current.value,
      photos: photos,
      characteristics: {
        135232: Number(selectedSizeRating),
        135220: Number(selectedLengthRating),
        135233: Number(selectedWidthRating),
        135219: Number(selectedFitRating),
        135221: Number(selectedComfortRating),
        135223: Number(selectedQualityRating),
      },
    };
    axios
      .post(
        'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews',
        form,
        { headers: { Authorization: `${TOKEN}` } }
      )
      .then(() => {
        console.log('Successfully added review! You are a GOD');
      })
      .catch((error) => {
        console.log('You suck at life sir', error);
        console.log(error.config.data);
      });
  };

  if (!showModal) {
    return null;
  } else {
    return ReactDom.createPortal(
      <>
        <div className='modal-overlay' onClick={() => setShowModal(false)} />
        <div className='modal-styles'>
          <span className='close' onClick={() => setShowModal(false)}>
            &times;
          </span>
          <form onSubmit={(e) => handleReviewSubmission(e)}>
            <input
              className='input-reviews'
              maxLength='60'
              placeholder='Summary of review'
              ref={summaryRef}
              required
            ></input>
            <br></br>
            <textarea
              className='text-field input-reviews'
              minLength='50'
              maxLength='1000'
              ref={bodyRef}
              placeholder='Write your review'
              required
            ></textarea>
            <br></br>
            <label htmlFor='email'></label>
            <input
              placeholder='Enter an email'
              className='input-reviews'
              type='email'
              ref={emailRef}
              name='email'
              required
            ></input>
            <br></br>
            <input
              className='input-reviews'
              placeholder='Enter a nickname'
              ref={nicknameRef}
            ></input>
            <br></br>
            <br></br>
            <div>
              <RadioStarRating
                setSelectedStarRating={setSelectedStarRating}
                selectedStarRating={selectedStarRating}
              />
            </div>
            <br></br>
            <div>
              Recommend this product?
              <label className='check-container'>
                {' '}
                Yes
                <input
                  className='checkbox'
                  type='checkbox'
                  onClick={() => setSelectedRecommend(!selectedRecommend)}
                ></input>
                <span className='checkmark'></span>
              </label>
              <label className='check-container'>
                {' '}
                No
                <input className='checkbox' type='checkbox'></input>
                <span className='checkmark'></span>
              </label>
            </div>
            <div>
              <RadioButtons
                setSelectedSizeRating={setSelectedSizeRating}
                setSelectedComfortRating={setSelectedComfortRating}
                setSelectedFitRating={setSelectedFitRating}
                setSelectedLengthRating={setSelectedLengthRating}
                setSelectedWidthRating={setSelectedWidthRating}
                setSelectedQualityRating={setSelectedQualityRating}
              />
            </div>
            <div>
              <ReviewPhotoUpload setPhotos={setPhotos} />
            </div>
            <br></br>
            <input
              className='send-review-btn'
              type='submit'
              value='Send Review'
            ></input>
          </form>
        </div>
      </>,
      document.getElementById('portal')
    );
  }
};
export default NewReview;
