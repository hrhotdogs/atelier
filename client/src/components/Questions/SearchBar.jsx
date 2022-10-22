import React from 'react';
import axios from 'axios';

const { useState } = React;

const SearchBar = ({questions, searchQuestions, getQuestions}) => {
  const [input, setInput] = useState('')
  const [noMatch, setNoMatch] = useState(false)

  function onChangeHandler(e) {
    setInput(e.target.value)
    setNoMatch(false)
    if (input.length > 2) {
      let filtered = questions.filter((question) => {
        return question.question_body.includes(input)
      })
      if (filtered.length === 0) {
        setNoMatch(true);
      }
      searchQuestions(filtered)
    } else if (input.length <= 2 || filtered.length === 0) {
      getQuestions();
    }
  }
  return (
    <>
      <input className='searchBar' type='text' placeholder='Have a question. Search for Answers...' value={input} onChange={(e) => onChangeHandler(e)}/>
      <br/>
      {noMatch ? <span className='noMatch'>Search results have no match.</span> : null}
    </>
  )
}

export default SearchBar;