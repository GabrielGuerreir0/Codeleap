import React, { useState } from "react";
import "./Singup.css";
import { useAuth } from "../../context/AuthContext";

const Signup = () => {
  const [username, setUsername] = useState("");
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim()) {
      login(username);
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-content">
          <h1 className="signup-title">Welcome to CodeLeap network!</h1>
          <div>
            <p className="signup-subtitle">Please enter your username</p>
            <input
              type="text"
              className="signup-input"
              placeholder="John doe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signup-button-container">
            <button
              className="botao"
              disabled={!username.trim()}
              onClick={handleSubmit}
            >
              ENTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
