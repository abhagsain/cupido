import React from "react";
import logo from "./logo.svg";
import "./styles/index.css";
import Header from "./components/Header";
import Main from "./components/main/Main";
import ProfileSection from "./components/profiles/ProfileSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
        <ProfileSection />
      </header>
    </div>
  );
}

export default App;
