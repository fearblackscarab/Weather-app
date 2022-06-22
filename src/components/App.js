import React, { useEffect, useState } from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Main from "./main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;