import React from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import CurrentInfo from '../Context.jsx';

const {useEffect, useState} = React;

const Questions = () => {
  const currentState = React.useContext(CurrentInfo);
  let [currentProductID, setCurrentProductID] = currentState.currentProductID;
  let [questions, setQuestions] = useState([])
  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${currentProductID}`, {
      headers: {
        'Authorization': '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'
      }
    })
    .then((res) => setQuestions(res.data.results))
    .catch((err) => console.log('ERROR in get request for questions', err))
  }, [])


  return (
    <div>Questions & Answers
      {/* <QuestionsList /> */}
      {questions.map((q) => <div>{q.question_body}</div>)}
      {/* {console.log(questions[0].question_body)} */}
    </div>
  )
}

export default Questions;