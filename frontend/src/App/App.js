import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { HomePage } from "../pages/HomePage";
import { ContatoPage } from "../pages/ContatoPage";
import { DestinosPage } from "../pages/DestinosPage";
import { ViagensPage } from "../pages/ViagensPage";

function App() {
  return (
    <BrowserRouter>
      <div className="row p-0 m-0"
      style={{minHeight: "100vh"}}
      >
        <div className="col-12 p-0 m-0 d-flex flex-column justify-content-between">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Home" element={<HomePage />}></Route>
            <Route path="/Contato" element={<ContatoPage />}></Route>
            <Route path="/Destinos" element={<DestinosPage />}></Route>
            <Route path="/Viagens" element={<ViagensPage />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
