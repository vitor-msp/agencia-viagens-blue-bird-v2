import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";
import { DestinationsPage } from "../pages/DestinationsPage";
import { TripsPage } from "../pages/TripsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="row p-0 m-0" style={{ minHeight: "100vh" }}>
        <div className="col-12 p-0 m-0 d-flex flex-column justify-content-between">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Home" element={<HomePage />}></Route>
            <Route path="/Contato" element={<ContactPage />}></Route>
            <Route path="/Destinos" element={<DestinationsPage />}></Route>
            <Route path="/Viagens" element={<TripsPage />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
