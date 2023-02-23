import React from "react";
import  Cards from "../../components/cards/cards.js";
import Footer from "../../components/footer/footer";
import  Header  from "../../components/header/header";

function Home() {
  return (
    <div>
      <Header />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;