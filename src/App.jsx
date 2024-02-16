import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNav from "./Components/MyNav";
import { Container } from "react-bootstrap";
import AllSection from "./Components/AllSection";
import Favorite from "./Components/Favorite";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Container>
        <Routes>
          <Route path="/" element={<AllSection />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
