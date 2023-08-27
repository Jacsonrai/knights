import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import News from "./pages/news";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Policy from "./pages/policy";
import Membership from "./pages/membership";
import Report from "./pages/report";
import SignUp from "./pages/signup";
import WarRoom from "./pages/war-room";
import NavBar from "./components/shared/navbar";
import { Footer } from "./components/shared/footer";
//font import
import "./fonts/theblowarregular-d91mz.ttf";
import "./fonts/Ubuntu-Bold.ttf";
import "./fonts/Ubuntu-Regular.ttf";

const App = () => {
  return (
    <div div className="font-[Ubuntu-Regular]">
      <NavBar />
      {/* Routing path for pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignUp />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/report" element={<Report />} />
        <Route path="/war-room" element={<WarRoom />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
