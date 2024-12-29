import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line

import RestaurantLandingPage from "demos/RestaurantLandingPage.js";

// import ComponentRenderer from "ComponentRenderer.js";
// import ThankYouPage from "ThankYouPage.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
        <Routes>
          <Route path="/" element={<RestaurantLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}