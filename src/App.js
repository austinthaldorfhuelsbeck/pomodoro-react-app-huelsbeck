import React from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";

const App = () => {
  return (
    <div className="App transparentBox">
      <header className="App-header container">
        <h1>Pomodoro Timer</h1>
      </header>
      <div className="container">
        <Pomodoro />
      </div>
    </div>
  );
};

export default App;
