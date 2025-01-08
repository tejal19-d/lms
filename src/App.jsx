import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Hero from "./components/Hero"; 
import LoginPage from "./components/LoginPage";
import Features from "./components/Features";
import CoursesPage from "./components/CoursesPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<LoginPage />} />
    
        <Route exact path="/" component={Features} />
        <Route path="/courses/:feature" component={CoursesPage} />
      </Routes>
    </Router>
  );
}

export default App;
