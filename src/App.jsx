import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
