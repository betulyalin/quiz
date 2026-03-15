import React, { useState } from "react";
import "./introduce.css";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const startQuiz = () => {
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Lutfen isminizi girin!");
      return;
    }
    setError("");
    sessionStorage.setItem("quiz_user_name", trimmed);
    navigate("/quiz/easy");
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
        <div className="intro-name-field">
          <input
            type="text"
            placeholder="Isminiz"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && startQuiz()}
            className="intro-name-input"
            maxLength={50}
          />
          {error && <p className="intro-name-error">{error}</p>}
        </div>
        <div onClick={startQuiz} className="introduce-btn">Teste basla ve yap şovunu:))) </div>
      </div>
    </div>
  );
};

export default Introduce;
