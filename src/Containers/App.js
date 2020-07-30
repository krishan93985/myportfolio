import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import View from "../Components/View/View";
import About from "../Components/About/About";
import Projectarray from "../Components/Projectarray/Projectarray";
import Techstack from "../Components/Techstack/Techstack";
import Form from "../Components/Form/Form";
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader/Loader";
import "./App.css";

function App() {
  const [loaded, setload] = useState(false);

  useEffect(() => {
    setload(true);
  }, []);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 650 ||
      document.documentElement.scrollTop > 650
    ) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-3.4em";
    }
  }

  return loaded ? (
    <div className="App">
      <Navbar />
      <View />
      <About />
      <Projectarray />
      <Techstack />
      <Form />
      <Footer />
    </div>
  ) : (
    <div>
      <Loader />
    </div>
  );
}

export default App;
