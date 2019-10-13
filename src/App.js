import React from "react";
import logo from "./logo.svg";
import "./sass/index.scss";
import Header from "./components/Header";
import Main from "./components/main/Main";
import ProfileSection from "./components/profiles/ProfileSection";
import Testimonials from "./components/testimonials/Testimonials";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <ProfileSection />
        <Main />
        <Testimonials />
        <Form />
      </header>
    </div>
  );
}

export default App;
