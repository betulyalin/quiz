import React, { useMemo, useState } from "react";
import "./quiz.css";
import Question from "../../components/question.jsx";
import { useParams } from "react-router-dom";
import questionsEasy from "../../data/questions-easy.js";
import questionsMedium from "../../data/questions-medium.js";
import questionsHard from "../../data/questions-hard.js";

const Quiz = () => {
    const { difficulty } = useParams();
    const questions = useMemo(() => {
      if (difficulty === "medium") {
        return questionsMedium;
      }
      if (difficulty === "hard") {
        return questionsHard;
      }
      return questionsEasy;
    }, [difficulty]);
    const [score , setScore] = useState(0);
    const [counter, setCounter] = useState(0);
    const [modal , setModal] = useState(false);
    
  return (
    <div className="quiz">
     {questions.length === 0 ? (
       <div className="loading">Yükleniyor...</div>
     ) : modal ? (
       <div className="result">
         <h1>quiz bittihadi gule gule</h1>
         <div className="score-display">
           <p>total puanın </p>
           <h2>{score} / {questions.length}</h2>
           <p className="percentage">{Math.round((score / questions.length) * 100)}%</p>
         </div>
         <button onClick={() => window.location.href = '/'}>ana sayfaya don</button>
       </div>
     ) : (
       <Question
         questions={questions}
         score={score}
         setScore={setScore}
         counter={counter}
         setCounter={setCounter}
         modal={modal} 
         setModal={setModal}
       />
     )}
    </div>
  );
};

export default Quiz;
