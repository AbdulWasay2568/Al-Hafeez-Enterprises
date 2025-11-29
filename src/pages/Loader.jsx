import React from "react";
// import "./pages/Loader/loader.css";

function Loader({ loading }) {
  return (
    <div className={`loader-container ${loading ? "loading" : "loaded"}`}>
      <div className="loader">
        <div className="loader-inner">
          <div className="loader-line-wrap">
            <div className="loader-line"></div>
          </div>
          <div className="loader-line-wrap">
            <div className="loader-line"></div>
          </div>
          <div className="loader-line-wrap">
            <div className="loader-line"></div>
          </div>
          <div className="loader-line-wrap">
            <div className="loader-line"></div>
          </div>
          <div className="loader-line-wrap">
            <div className="loader-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
