import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "src/components/pages/LandingPage";
import Users from "src/components/auth/admin/Users/Users/Users";
import UserDetails from "src/components/auth/admin/UserDetails/UserDetails";

function App() {
  return (
    <>
      {/* SEO OPTIMIZATION WITH REACT HELMET ASYNC */}
      <HelmetProvider>
        <Helmet>
          <title>Lendsqr</title>
          <link rel="canonical" href="" />
          {/* special metatag */}
          <link rel="canonical" href="" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="" />
          {/* special metatag */}
        </Helmet>
      </HelmetProvider>
      {/* SEO OPTIMIZATION WITH REACT HELMET ASYNC */}

      {/* ROUTES DEFINITION */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-details/:id" element={<UserDetails />} />
      </Routes>
      {/* ROUTES DEFINITION */}
    </>
  );
}

export default App;
