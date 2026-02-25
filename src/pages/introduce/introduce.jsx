import React, { useState } from "react";
import "./introduce.css";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/dropdown.jsx";

const Introduce = () => {
  const navigate = useNavigate();
  const difficulties = ["easy", "medium", "hard"];
  const [difficultyChanged, setDifficultyChanged] = useState("");

  const startQuiz = () => {
    if (difficultyChanged) {
      navigate(`/quiz/${difficultyChanged}`);
    } else {
      alert("Lutfen bir zorluk seviyesi secin!");
    }
  };

  return (
    <div className="introduce">
      <div className="introduce-container">
        <img
          src="https://st5.depositphotos.com/49078592/63930/i/450/depositphotos_639303912-stock-illustration-handwriting-text-trivia-conceptual-photo.jpg"
          alt=""
        />
        <Dropdown data={difficulties} setDiffuciltyChanged={setDifficultyChanged} />
        <div onClick={startQuiz} className="introduce-btn">Quizze basla</div>
      </div>
    </div>
  );
};

export default Introduce;
