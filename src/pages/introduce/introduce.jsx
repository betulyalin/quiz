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
        <div className="intro-hero">
          <div className="hero-icons">
            <div className="hero-mark">?</div>
            <div className="hero-title">Beni ne kadar taniyorsun?</div>
            <div className="hero-mark">?</div>
          </div>
          <div className="hero-text">
          </div>
        </div>
        <Dropdown data={difficulties} setDiffuciltyChanged={setDifficultyChanged} />
        <div onClick={startQuiz} className="introduce-btn">Quizze basla</div>
      </div>
    </div>
  );
};

export default Introduce;
