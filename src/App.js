import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import "./App.scss";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Services from "./Component/Services/Services";
import About from "./Component/About/About";
import ContactUs from "./Component/ContactUs/ContactUs";
import { Element } from "react-scroll";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Element name="hero">
                <Hero />
              </Element>

              <Element name="services">
                <div id="body">
                  <Services />
                </div>
              </Element>
              <Element name="about">
                <About />
              </Element>
              <Element name="contact">
                <ContactUs />
              </Element>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
