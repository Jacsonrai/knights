import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import News from "./pages/news";
import Contact from "./pages/contact";
import Login from "./pages/login";
import NavBar from "./components/shared/navbar";
const App = () => {
  return (
    <>
      <NavBar />
      {/* Routing path for pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
