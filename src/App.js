import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventPage from "./components/EventPage";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/createEvent" element={<EventPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
