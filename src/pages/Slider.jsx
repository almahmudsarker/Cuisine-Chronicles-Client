import React from 'react';

const Slider = () => {
    return (
      <div
        id="carouselExampleInterval"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ height: "100vh", width: "100%", borderRadius: "0px", border: "none" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              src="https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1388&q=80"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://images.unsplash.com/photo-1558985212-92c2ff0b56e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80a"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    );
};

export default Slider;