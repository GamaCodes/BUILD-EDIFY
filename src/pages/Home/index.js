import React from "react";
import Hero from "../../Components/Hero";
import Main from "../../Components/Main";
import Footer from "../../Components/Footer";

export default function index() {
  return (
    <div className="home-contain">
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
