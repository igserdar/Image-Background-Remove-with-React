import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RemoveBackground from "./components/RemoveBackground";

function App() {
  return (
    <div className="App">
      <div className="container py-5">
        <Header/>
          <RemoveBackground/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
