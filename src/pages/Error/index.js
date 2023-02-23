import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./error.css";

const Error= () => {
  const { errorCode } = useParams();
  return (
    <div>
      <Header />
      <div className="errorContainer">
        <p>Something went wrong!</p>
        {errorCode && <p>{`Error code: ${errorCode}`}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Error;