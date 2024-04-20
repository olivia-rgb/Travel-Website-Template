import * as React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Destination from "./components/Destination";
import Book from "./components/Book";
import Testimonials from "./components/Testimonials";
import Logo from "./components/Logo";
import Subscriber from "./components/Subscriber";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url('Decore.png')`, 
        backgroundSize: "auto",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", 
        padding: "1rem"
      
      }}
    >
      <Navbar />
      < Header />
      <Services />
      <Destination />
      <Book />
      <Testimonials />
      <Logo />
      <Subscriber />
      <Footer />
      
  </div>
  );
}

export default App;
