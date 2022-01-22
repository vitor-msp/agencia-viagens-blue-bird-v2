import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ModalTrip } from "../components/ModalTrip";
import { ModalInfo } from "../components/ModalInfo";
import { ModalLogin } from "../components/ModalLogin";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";
import { DestinationsPage } from "../pages/DestinationsPage";
import { OffersPage } from "../pages/OffersPage";
import { TripsPage } from "../pages/TripsPage";
import { MyTripsPage } from "../pages/MyTripsPage";
import "./App.css";

function App() {
  const modalTripContent = useSelector((state) => state.modalTripContent);
  const modalInfo = useSelector((state) => state.modalInfo);
  const modalLogin = useSelector((state) => state.modalLogin);
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
            <Route path="/Promocoes" element={<OffersPage />}></Route>
            <Route path="/Viagens" element={<TripsPage />}></Route>
            <Route path="/Minhas_Viagens" element={<MyTripsPage />}></Route>
          </Routes>
          {modalTripContent !== null && (
            <ModalTrip content={modalTripContent} />
          )}
          {modalInfo !== null && <ModalInfo content={modalInfo} />}
          {modalLogin && <ModalLogin/>}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
