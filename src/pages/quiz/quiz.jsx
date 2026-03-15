import React, { useMemo, useState, useEffect, useRef } from "react";
import "./quiz.css";
import Question from "../../components/question.jsx";
import { useParams } from "react-router-dom";
import questionsEasy from "../../data/questions-easy.js";
import questionsMedium from "../../data/questions-medium.js";
import questionsHard from "../../data/questions-hard.js";

const saveResult = async (payload) => {
  try {
    const res = await fetch("/api/save-result", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Kayit basarisiz");
  } catch (err) {
    console.warn("Sonuc kaydedilemedi:", err);
  }
};

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
    const [answersLog, setAnswersLog] = useState([]);
    const savedRef = useRef(false);

    const onAnswerRecord = (record) => {
      setAnswersLog((prev) => [...prev, record]);
    };

    useEffect(() => {
      if (!modal || savedRef.current) return;
      savedRef.current = true;
      const name = sessionStorage.getItem("quiz_user_name") || "Isimsiz";
      saveResult({
        name,
        score,
        total: questions.length,
        answers: answersLog,
      });
    }, [modal, score, questions.length, answersLog]);

    const getResultMessage = (level, currentScore, total) => {
      const percent = total > 0 ? (currentScore / total) * 100 : 0;
      if (level === "medium") {
        if (percent <= 40) {
          return "Orta seviye icin dusuk kaldin. Biraz daha tanismaniz lazim.";
        }
        if (percent <= 70) {
          return "Fena degil, orta seviyede idare eder.";
        }
        return "Tebrikler! Orta seviye icin cok iyi.";
      }
      if (level === "hard") {
        if (percent <= 40) {
          return "Zor seviyede baya zorlandin. Daha cok tanismaniz lazim.";
        }
        if (percent <= 70) {
          return "Zor seviye icin guzel. Iyi gidiyorsun.";
        }
        return "Efsane! Zor seviyede harika sonuc.";
      }
      if (percent <= 40) {
        return "Kolayda bile dusuk... arkadasligi bitirelim.";
      }
      if (percent <= 70) {
        return "Eh iste. Kolay seviye icin idare eder.";
      }
      return "Tebrikler! Ama kolaydi zaten.";
    };
    
  return (
    <div className="quiz">
     {questions.length === 0 ? (
       <div className="loading">Yükleniyor...</div>
     ) : modal ? (
       <div className="result">
         <h1>BİTTİ</h1>
         <div className="score-display">
           <p>SONUÇ </p>
           <h2>{score} / {questions.length}</h2>
           <p className="percentage">{Math.round((score / questions.length) * 100)}%</p>
           <p>{getResultMessage(difficulty, score, questions.length)}</p>
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
         onAnswerRecord={onAnswerRecord}
       />
     )}
    </div>
  );
};

export default Quiz;
