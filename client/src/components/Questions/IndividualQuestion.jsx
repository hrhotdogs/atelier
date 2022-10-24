import React from 'react';
import axios from 'axios';
import IndividualAnswers from './IndividualAnswers.jsx';
import AddAnswerModal from './AddAnswerModal.jsx'
import { TOKEN } from '../../../../config.js';

const { useState } = React;

const IndividualQuestion = ({ question }) => {
  const [showAnswersModal, setShowAnswersModal] = useState(false)
  const [showAllAnswers, setShowAllAnswers] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [reported, setReported] = useState(false)
  let answersArray = Object.values(question.answers)

  function onClickHandler(e) {
    e.preventDefault()
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question.question_id}/helpful`, null,
    {
      headers: {
        'Authorization': `${TOKEN}`,
      }
    })
    .catch((err) => console.log('ERROR in PUT request', err))
    setShowThanks(true)
  }

  function closeModal(e) {
    e.preventDefault();
    setShowAnswersModal(false);
  }

  function showAnswers(e) {
    e.preventDefault();
    setShowAllAnswers(true)
  }

  function showLess(e) {
    e.preventDefault();
    setShowAllAnswers(false)
  }

  function reportQuestion(e) {
    e.preventDefault();
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question.question_id}/report`, null,
    {
      headers: {
        'Authorization': `${TOKEN}`,
      }
    })
    .catch((err) => console.log('ERROR in PUT request to report question', err))
    setReported(true)
  }

  return (
    <div>
      <div className='question'>Q: {question.question_body}</div>
      <div className='helpfulContainer'>
        <span>Helpful?</span>
        <span> | </span>
        {showThanks ? <span>Thank you!</span> : <span onClick={(e) => onClickHandler(e)} className='yes-btn'>Yes({question.question_helpfulness})</span>}
        <span> | </span>
        <span className='yes-btn' onClick={() => setShowAnswersModal(true)}>Add Answer</span>
        <span> | </span>
        {reported ? <span>Reported</span> : <span className='yes-btn' onClick={(e) => reportQuestion(e)}>Report</span>}
        {showAnswersModal && <AddAnswerModal closeModal={closeModal} question={question}/>}
      </div>
      <div className='answersList'>
        {
          showAllAnswers ?
          answersArray.map((answer) => {
            return <IndividualAnswers answer={answer} key={answer.id}/>
          }):
          answersArray.slice(0, 2).map((answer) => {
            return <IndividualAnswers answer={answer} key={answer.id}/>
          })
        }
      </div>
      {!showAllAnswers && <button className='btn' onClick={(e) => showAnswers(e)}>Show All Answers</button>}
      {showAllAnswers && <button className='btn' onClick={(e) => showLess(e)}>Show Less</button>}

    </div>
  );
};

export default IndividualQuestion;
