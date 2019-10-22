import React from "react";
import logo from "./logo.svg";
import "./sass/index.scss";
import Header from "./components/Header";
import Main from "./components/main/Main";
import ProfileSection from "./components/profiles/ProfileSection";
import Testimonials from "./components/testimonials/Testimonials";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";

const Container = props => {
  return <div className="app__container">{props.children}</div>;
};
function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      <Container>
        <Header />
        <ProfileSection />
        <Main />
        <Testimonials />
        <Form />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
