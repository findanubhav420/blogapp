import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./pageNotFound.css";

function PageNotFound(){
  return (
    <div>
      <Header />
      <div className="pageNotFoundContainer">
        <p>404 Error. Page not found</p>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;