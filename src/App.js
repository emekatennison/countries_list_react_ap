
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import DetailsPage from "./DetailsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:code" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
