import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import "./App.scss";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Services from "./Component/Services/Services";
import About from "./Component/About/About";
import ContactUs from "./Component/ContactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div id="body">
                <Services />
              </div>
              <About />
              <ContactUs/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
