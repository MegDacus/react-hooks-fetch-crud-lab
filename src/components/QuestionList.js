import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions, onDeleteQuestion, onChangeAnswer}) {

useEffect(() => {
  fetch('http://localhost:4000/questions')
    .then(resp => resp.json())
    .then(data => setQuestions(data))
}, [])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map(question => {
      return <QuestionItem onChangeAnswer={onChangeAnswer} onDeleteQuestion={onDeleteQuestion} question={question} key={question.id}/>
    })}
      </ul>
    </section>
  );
}

export default QuestionList;
