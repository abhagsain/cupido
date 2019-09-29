import React from "react";
import logo from "./logo.svg";
import "./styles/index.css";
import Header from "./components/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
      </header>
    </div>
  );
}

export default App;
