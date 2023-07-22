import React from "react";
import Navbar from "./Components/pages/Navbar";
import About from "./Components/pages/About";
import Bg from "./Components/pages/Bg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Components/pages/Form";
import PostPreview from "./Components/pages/PostPreview";
import Contact from "./Components/pages/Contact";
import Mainpost from "./Components/pages/Mainpost";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div> 
      <Routes>
        <Route path="/" element={<Bg />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/newblog" element={<Form/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<PostPreview />}></Route>
        <Route path="/mainpost" element={<Mainpost />}></Route>
      </Routes>
    </Router>
  );
}



