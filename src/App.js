import { BrowserRouter, Route, Routes, useNavigation } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Nav from "./components/Nav";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import Footer from "./components/Footer";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
