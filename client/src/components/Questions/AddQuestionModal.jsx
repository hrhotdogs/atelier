import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

const { useRef, useState, useEffect } = React;

const AddQuestionModal = ({ closeModal, productName, postQuestions }) => {
  const questionRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const [showSubmitted, setShowSubmitted] = useState(false)

  function submitHandler(e) {
    e.preventDefault()
    postQuestions(questionRef.current.value, usernameRef.current.value, emailRef.current.value)
    setShowSubmitted(true)
  }

  return ReactDOM.createPortal(
    <div>
      <div className='modalBackground' onClick={(e) => closeModal(e)}></div>
      <div className='modalContainer'>
        <div>
          <span className='close' onClick={(e) => closeModal(e)}>&times;</span>
          <h1>Ask Your Question</h1>
          <h2>About the {productName}</h2>
        </div>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className='input-container'>
            <label>Question</label><br/>
            <textarea
            maxLength='1000'
            className='input textarea'
            type='text'
            placeholder='your question'
            ref={questionRef}
            autoFocus
            required/><br/>
          </div>
          <div className='input-container'>
            <label>Username</label><br/>
            <input className='input' type='text' placeholder='jackson11'ref={usernameRef} required/><br/>
          </div>
          <div className='input-container'>
            <label htmlFor='email'>Email</label><br/>
            <input className='input' type='email' name='email' placeholder='jackson11@email.com' ref={emailRef} required/>
            <div className='helpfulMessage'>"For authentication reasons, you will not be emailed"</div>
          </div>
          <div className='submit-container'>
          {showSubmitted ? <span>SUBMITTED!</span> : <button className='btn-submit' type='submit'>Submit Question</button>}
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default AddQuestionModal;