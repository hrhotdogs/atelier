import React, { useState, useRef } from 'react';
import ReactDom from 'react-dom';
import RadioButtons from './RadioButtons.jsx';
import RadioStarRating from './RadioStarRating.jsx';
import ReviewPhotoUpload from './ReviewPhotoUpload.jsx';
import { TOKEN } from '../../../../config.js';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  product_id: 0,
  rating: 0,
  recommend: null,
  photos: [],
  characteristics: {},
};

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
  const [selectedStarRating, setSelectedStarRating] = useState(null);
  const [selectedRecommend, setSelectedRecommend] = useState(null);
  const [photos, setPhotos] = useState([]);
  const values = [];

  if (metaData.characteristics !== undefined) {
    for (let key in metaData.characteristics) {
      values.push(metaData.characteristics[key].id);
    }
  }

  const handleReviewSubmission = (e) => {
    e.preventDefault();
    let form = {
      product_id: currentProductID,
      rating: selectedStarRating,
      summary: summaryRef.current.value,
      body: bodyRef.current.value,
      recommend: selectedRecommend,
      name: nicknameRef.current.value,
      email: emailRef.current.value,
      photos: photos,
      characteristics: {
        135219: selectedSizeRating,
        135220: selectedLengthRating,
        135221: selectedWidthRating,
        135222: selectedFitRating,
        135223: selectedComfortRating,
        135224: selectedQualityRating,
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
              maxLength='60'
              placeholder='Summary of review'
              ref={summaryRef}
              required
            ></input>
            <br></br>
            <textarea
              minLength='50'
              maxLength='1000'
              ref={bodyRef}
              placeholder='Enter your review here'
              required
            ></textarea>
            <br></br>
            <label htmlFor='email'>Enter your email:</label>
            <input type='email' ref={emailRef} name='email' required></input>
            <br></br>
            <input placeholder='Enter a nickname' ref={nicknameRef}></input>
            <br></br>
            <div>
              <RadioStarRating setSelectedStarRating={setSelectedStarRating} />
            </div>
            <br></br>
            <div>
              Recommend this product? Yes
              <input
                type='checkbox'
                name='rec'
                onClick={() => setSelectedRecommend(true)}
              ></input>
              No
              <input
                type='checkbox'
                name='rec'
                onClick={() => setSelectedRecommend(false)}
              ></input>
            </div>
            <br></br>
            <br></br>
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
            <input type='submit' value='Send Review'></input>
          </form>
        </div>
      </>,
      document.getElementById('portal')
    );
  }
};
export default NewReview;
