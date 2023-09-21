import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Gallery from "./components/gallery/Gallery";
import Search from "./components/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
