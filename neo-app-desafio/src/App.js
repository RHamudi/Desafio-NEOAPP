import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import ComicInfo from "./pages/comicInfo/comicInfo";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/comicInfo/:id" element={<ComicInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
