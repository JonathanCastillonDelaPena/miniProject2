import React from "react";
import img7 from "../images/Viand1.jpg";
import img8 from "../images/Viand2.jpg";
import img9 from "../images/Can3.jpg";
import img10 from "../images/Can4.jpg";
import img11 from "../images/Milk5.jpg";
import img12 from "../images/Milk6.jpg";
import img13 from "../images/Juice2.jpg";
import img14 from "../images/Juice3.jpg";

function BestProducts() {
  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Best Products</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center">
              <img
                style={{ height: 200 }}
                className="img-fluid"
                src={img7}
                alt="viand"
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Barrio Fiesta Bagoong Spicy</h6>
              <div className="d-flex justify-content-center">
                <h6>₱206</h6>
                <h6 className="text-muted ml-2">
                  <del>₱230</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="#detail" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </a>
              <a href="#detail" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center">
              <img
                style={{ height: 200 }}
                className="img-fluid"
                src={img8}
                alt="viand"
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Barrio Fiesta Bagoong Regular</h6>
              <div className="d-flex justify-content-center">
                <h6>₱206</h6>
                <h6 className="text-muted ml-2">
                  <del>₱230</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="#products" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </a>
              <a href="#products" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center">
              <img
                style={{ height: 200 }}
                className="img-fluid"
                src={img9}
                alt="can foods"
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Mega Sardines in Tomato Sauce</h6>
              <div className="d-flex justify-content-center">
                <h6>₱24</h6>
                <h6 className="text-muted ml-2">
                  <del>₱26</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="#products" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </a>
              <a href="#products" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center">
              <img
                style={{ height: 200 }}
                className="img-fluid"
                src={img10}
                alt="can food"
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Mega Sardines in spicy sauce</h6>
              <div className="d-flex justify-content-center">
                <h6>₱24</h6>
                <h6 className="text-muted ml-2">
                  <del>₱26</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="#products" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </a>
              <a href="#products" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center">
              <img
                style={{ height: 200 }}
                className="img-fluid"
                src={img11}
                alt="kopiko"
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Kopiko Black</h6>
              <div className="d-flex justify-content-center">
                <h6>₱13</h6>
                <h6 className="text-muted ml-2">
                  <del>₱15</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="#products" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </a>
              <a href="#products" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center">
              <img
                style={{ height: 200 }}
                className="img-fluid"
                src={img12}
                alt="kopiko"
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Kopiko Brown</h6>
              <div className="d-flex justify-content-center">
                <h6>₱13</h6>
                <h6 className="text-muted ml-2">
                  <del>₱15</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="#products" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </a>
              <a href="#products" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center">
              <img
                style={{ height: 200 }}
                className="img-fluid"
                src={img13}
                alt="juice"
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Zesto Big Orange</h6>
              <div className="d-flex justify-content-center">
                <h6>₱10</h6>
                <h6 className="text-muted ml-2">
                  <del>₱12</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="#products" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </a>
              <a href="#products" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center">
              <img
                style={{ height: 200 }}
                className="img-fluid"
                src={img14}
                alt="juice"
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Zesto Big Apple</h6>
              <div className="d-flex justify-content-center">
                <h6>₱10</h6>
                <h6 className="text-muted ml-2">
                  <del>₱12</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="#products" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </a>
              <a href="#products" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BestProducts;
