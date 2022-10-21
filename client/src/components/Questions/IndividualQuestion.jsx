import React from 'react';
import axios from 'axios';
import IndividualAnswers from './IndividualAnswers.jsx';
import AddAnswerModal from './AddAnswerModal.jsx'

const { useState } = React;

const IndividualQuestion = ({ question }) => {
  const [showAnswersModal, setShowAnswersModal] = useState(false)
  const [showAllAnswers, setShowAllAnswers] = useState(false)
  let answersArray = Object.values(question.answers)

  function onClickHandler() {
    console.log('clicked')
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

  return (
    <div>
      Q: {question.question_body}
      <div className='helpfulContainer'>
        <span>Helpful |</span>
        <span onClick={() => onClickHandler()}> Yes({question.question_helpfulness}) |</span>
        <span onClick={() => setShowAnswersModal(true)}> Add Answer</span>
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
      {!showAllAnswers && <button onClick={(e) => showAnswers(e)}>Show All Answers</button>}
      {showAllAnswers && <button onClick={(e) => showLess(e)}>Show Less</button>}

    </div>
  );
};

export default IndividualQuestion;
