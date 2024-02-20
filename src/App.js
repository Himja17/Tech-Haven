import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import "./App.scss";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Services from "./Component/Services/Services";
import About from "./Component/About/About";

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
              <About/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
