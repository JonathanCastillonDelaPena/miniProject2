import React from "react";
import img from "../images/sari1.jpg";
import image from "../images/sari2.webp";

function Carousel() {
  return (
    <div
      id="header-carousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div
          style={{ height: 510 }}
          className="carousel-item active"
          data-bs-interval="10000"
        >
          <img  className="img-fluid" src={img} alt="Imagesarisari" />

          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3">
              <h3 className="text-light text-uppercase font-weight-medium mb-3">
                10% Off Your First Order
              </h3>
              <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                Can Foods
              </h3>
              <a
                href="shop.html"
                className="btn btn-primary text-light py-2 px-3"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ height: 510 }}
          className="carousel-item"
          data-bs-interval="20000"
        >
          <img className="img-fluid" src={image} alt="Imagesarisari" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3">
              <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                Reasonable Price
              </h3>
              <a href="/" className="btn btn-primary text-light py-2 px-3">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#header-carousel"
        data-bs-slide="prev"
      >
        <div className="btn btn-dark">
          <span className="carousel-control-prev-icon mb-n2"></span>
        </div>
      </a>
      <a
        className="carousel-control-next"
        href="#header-carousel"
        data-bs-slide="next"
      >
        <div className="btn btn-dark">
          <span className="carousel-control-next-icon mb-n2"></span>
        </div>
      </a>
    </div>
  );
}
export default Carousel;
