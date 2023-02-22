import React from "react";
import img1 from "../images/AlcoDrink2.jpg";
import img2 from "../images/Can2.jpg";
import img3 from "../images/S2.jpg";
import img4 from "../images/C2.jpg";
import img5 from "../images/d2.jpg";
import img6 from "../images/Milk1.jpg";

function ProductCards() {
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
            <p className="text-right">5 Products</p>
            <a
              href="#product"
              className="cat-img position-relative overflow-hidden mb-3 text-center"
            >
              <img
                style={{ height: 200 }}
                className="img-fluid"
                src={img1}
                alt="alcoholic drink"
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Alcoholic Drinks</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
            <p className="text-right">25 Products</p>
            <a
              href="#product"
              className="cat-img position-relative overflow-hidden mb-3 text-center"
            >
              <img
                style={{ height: 200 }}
                className="img-fluid"
                src={img2}
                alt="can foods"
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Can Foods</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
            <p className="text-right">15 Products</p>
            <a
              href="#products"
              className="cat-img position-relative overflow-hidden mb-3 text-center"
            >
              <img
                style={{ height: 200 }}
                className="img-fluid"
                src={img3}
                alt="snacks"
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Snacks</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
            <p className="text-right">5 Products</p>
            <a
              href="#products"
              className="cat-img position-relative overflow-hidden mb-3 text-center"
            >
              <img
                style={{ height: 200 }}
                className="img-fluid"
                src={img4}
                alt="condements"
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Condements</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
            <p className="text-right">10 Products</p>
            <a
              href="#products"
              className="cat-img position-relative overflow-hidden mb-3 text-center"
            >
              <img
                style={{ height: 200 }}
                className="img-fluid"
                src={img5}
                alt="detergent"
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Detergents</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={{ padding: 30 }}
          >
            <p className="text-right">10 Products</p>
            <a
              href="#products"
              className="cat-img position-relative overflow-hidden mb-3 text-center"
            >
              <img
                style={{ height: 200 }}
                className="img-fluid"
                src={img6}
                alt="Milk"
              />
            </a>
            <h5 className="font-weight-semi-bold m-0">Milks</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
