import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
    console.log(questions, newQuestion)
  }
  
  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions);
  }
  
  function handleChangeAnswer(updatedQuestion) {
    const updatedQuestionArray = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestionArray);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList setQuestions={setQuestions}questions={questions} onChangeAnswer={handleChangeAnswer} onDeleteQuestion={handleDeleteQuestion}/>}
    </main>
  );
}

export default App;
