import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchForm from "./components/page/search/SearchForm";
import Movie from "./components/page/search/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchForm />} />
        <Route path="/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
