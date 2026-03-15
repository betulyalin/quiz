import React, { useState, useEffect } from "react";
import "./question.css";

const Question = ({ questions, score, setScore, counter, setCounter, modal, setModal, onAnswerRecord }) => {
  const QUESTION_TIME = 20;
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  
  const decodeHTML = (html) => {
         const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };
  
  const currentQuestion = questions[counter];
  
  useEffect(() => {
    setTimeLeft(QUESTION_TIME);
  }, [counter]);

  useEffect(() => {
    if (!currentQuestion || modal) {
      return;
    }

    if (timeLeft <= 0) {
      onAnswerRecord?.({
        questionIndex: counter,
        question: currentQuestion.question,
        selectedAnswer: null,
        correctAnswer: currentQuestion.correct_answer,
        isCorrect: false,
      });
      if (counter + 1 < questions.length) {
        setCounter((current) => current + 1);
      } else {
        setModal(true);
      }
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, counter, questions.length, setCounter, setModal, modal, currentQuestion]);
  
  if (!currentQuestion) {
    return <div className="question">Soru yükleniyor...</div>;
  }
  
  const handleAnswer = (answer) => {
    const isCorrect = answer === currentQuestion.correct_answer;
    if (isCorrect) {
      setScore((current) => current + 1);
    }
    onAnswerRecord?.({
      questionIndex: counter,
      question: currentQuestion.question,
      selectedAnswer: answer,
      correctAnswer: currentQuestion.correct_answer,
      isCorrect,
    });

    if (counter + 1 < questions.length) {
      setCounter((current) => current + 1);
    } else {
      setModal(true);
    }
  };
  
  return (
    <div className="question">
             <div className="question-header">
        <span>Soru {counter + 1}/{questions.length}</span>
                 <span className="timer">{timeLeft} saniye</span>
         </div>
      
      <div className="question-text">
          {decodeHTML(currentQuestion.question)}
      </div>
      
      <div className="answers">
        {currentQuestion.answers?.map((answer, index) => (
          <button 
            key={index}
            className="answer-btn"
            onClick={() => handleAnswer(answer)}
          >
            {decodeHTML(answer)}
          </button>
        ))}
      </div>
      
      <div className="score">Puan: {score}</div>
    </div>
  );
};

export default Question;
