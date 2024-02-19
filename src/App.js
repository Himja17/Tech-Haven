import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import "./App.scss";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Services from "./Component/Services/Services";

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
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
