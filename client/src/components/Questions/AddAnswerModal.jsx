import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import css from '../../style.css';
import {ProductIDContext} from '../Context.jsx';
import { TOKEN } from '../../../../config.js';

const { useRef, useState, useContext, useEffect } = React;

const AddAnswerModal = ({closeModal, question}) => {
  const {currentProductID, setCurrentProductID} = useContext(ProductIDContext);
  const AnswerRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const [photos, setPhotos] = useState([])
  const [productInfo, setProductInfo] = useState({})
  const productName = productInfo.name;

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}`, {headers: {Authorization: TOKEN}})
      .then((response) => {setProductInfo(response.data)})
      .catch((err) => {console.log(err)});
  }, [currentProductID])

  const modalBackground = {
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    position: 'fixed',
    display: 'flex',
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999
  }

  const modalContainer = {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    padding: '25px',
    textAlign: 'center',
    zIndex: 1000
  }

  function openWidget(e) {
    e.preventDefault()
    let myWidget = window.cloudinary.createUploadWidget({
    cloudName: 'dsafunhlm',
    uploadPreset: 'hackreacter_joe'}, (error, result) => {
      if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        setPhotos((prev) => [...prev, result.info.url])
      }
    })
    myWidget.open()
  }

  function submitHandler(e) {
    e.preventDefault()
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question.question_id}/answers`,
    {
      body: AnswerRef.current.value,
      name: usernameRef.current.value,
      email: emailRef.current.value,
      photos: photos
    },
    {
      headers: {
        'Authorization': `${TOKEN}`,
      }
    })
    .then(() => console.log('POSTED!'))
    .catch((err) => console.log('ERROR in post request for ANSWERS', err))
  }

  return ReactDOM.createPortal(
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div>
          <h1>Submit your Answer</h1>
          <h2>{productName}: {question.question_body}</h2>
        </div>
        <form onSubmit={(e) => submitHandler(e)}>
          <div>
            <lable> Answer </lable><br/>
            <input type='text' placeholder='your answer...' className='input' required ref={AnswerRef}/>
          </div>
          <div>
            <lable> Username </lable><br/>
            <input type='text' placeholder='jackson11' className='input' required ref={usernameRef}/>
          </div>
          <div>
            <lable> Email </lable><br/>
            <input type='text' placeholder='jackson11@email.com' className='input' required ref={emailRef}/>
          </div>
          <div>
            <button id='upload-widget' className='cloudinary-button input' onClick={(e) => openWidget(e)}> Add Photos </button><br/>
          </div>
          <button type='submit'>Submit Answer</button>
        </form>
        <div className='footer'>
          <button className='footer' onClick={(e) => closeModal(e)}>CANCEL</button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default AddAnswerModal;