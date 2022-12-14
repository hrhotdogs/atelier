import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { ProductIDContext } from '../Context.jsx';
import { TOKEN, CLOUDNAME, UPLOADPRESET } from '../../../../config.js';

const { useRef, useState, useContext, useEffect } = React;

const AddAnswerModal = ({ closeModal, question }) => {
  const { currentProductID, setCurrentProductID } =
    useContext(ProductIDContext);
  const AnswerRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const [photos, setPhotos] = useState([]);
  const [productInfo, setProductInfo] = useState({});
  const [showSubmitted, setShowSubmitted] = useState(false)
  const [showTooManyPhotos, setShowTooManyPhotos] = useState(false)
  const productName = productInfo.name;

  useEffect(() => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}`,
        { headers: { Authorization: TOKEN } }
      )
      .then((response) => {
        setProductInfo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentProductID]);

  function openWidget(e) {
    e.preventDefault();
    setShowTooManyPhotos(false)
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: CLOUDNAME,
        uploadPreset: UPLOADPRESET,
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          setPhotos((prev) => [...prev, result.info.url]);
        }
      }
    );
    myWidget.open();
  }

  function submitHandler(e) {
    e.preventDefault();
    if (photos.length > 5) {
      setShowTooManyPhotos(true)
      setPhotos([])
      return;
    }
    axios
      .post(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question.question_id}/answers`,
        {
          body: AnswerRef.current.value,
          name: usernameRef.current.value,
          email: emailRef.current.value,
          photos: photos,
        },
        {
          headers: {
            Authorization: `${TOKEN}`,
          },
        }
      )
      .then(() => setShowSubmitted(true))
      .catch((err) => console.log('ERROR in post request for ANSWERS', err));
  }

  return ReactDOM.createPortal(
    <div>
      <div className='modalBackground' data-testid="addAnswerModal-test" onClick={(e) => closeModal(e)}></div>
      <div className='modalContainer'>
        <div>
          <span className='close' onClick={(e) => closeModal(e)}>
              &times;
          </span>
          <h1>Submit your Answer</h1>
          <h2>
            {productName}: {question.question_body}
          </h2>
        </div>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className='input-container'>
            <label> Answer </label><br/>
            <textarea
            type='text'
            maxLength='1000'
            placeholder='your answer...'
            className='input textarea'
            required
            autoFocus
            ref={AnswerRef}/>
          </div>
          <div className='input-container'>
            <label> Username </label><br/>
            <input type='text' placeholder='jackson11' className='input' required ref={usernameRef}/>
            <div className='helpfulMessage'>For privacy reasons, do not use your full name or email address</div>
          </div>
          <div className='input-container'>
            <label htmlFor='email'> Email </label><br/>
            <input type='email' name='email' placeholder='jackson11@email.com' className='input' required ref={emailRef}/>
            <div className='helpfulMessage'>"For authentication reasons, you will not be emailed"</div>
          </div>
          <div>
            <button id='upload-widget' className='cloudinary-button btn' onClick={(e) => openWidget(e)}> Add Photos </button><br/>
            <div className='helpfulMessage'>Max 5 images. Photo count: {photos.length}</div> {showTooManyPhotos ? <div>Too many images</div> : null}
          </div>
          <div className='submit-container'>
            {showSubmitted ? <span>SUBMITTED!</span> : <button className='btn-submit' type='submit'>Submit Answer</button>}
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default AddAnswerModal;
