import React from "react";
import logo from "./logo.svg";
import "./styles/index.css";
import Header from "./components/Header";
import Main from "./components/main/Main";
import ProfileSection from "./components/profiles/ProfileSection";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <ProfileSection />
        <Main />
        <Testimonials />
      </header>
    </div>
  );
}

export default App;
