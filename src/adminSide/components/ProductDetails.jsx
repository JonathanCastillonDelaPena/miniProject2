import React from "react";
import Alfonso from "../images/Alcodrink1.jpg";
import Ginisa from "../images/C1.jpg";
import Youngstown from "../images/Can1.jpg";
import Sting from "../images/CD1.jpg";

const ProductDetails = () => {
  return (
    <div>
      {/* Sort */}
      <div className="col-12 pb-1">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="dropdown ml-4">
            <button
              className="btn border dropdown-toggle"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort by
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="triggerId"
            >
              <a className="dropdown-item" href="/">
                Latest
              </a>
              <a className="dropdown-item" href="/">
                Popularity
              </a>
              <a className="dropdown-item" href="/">
                Best Rating
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="row">
        <div className="col">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center">
              <img className="img-fluid " src={Alfonso} alt="Alcohol" />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Alfonso Light</h6>
              <div className="d-flex justify-content-center">
                <h6>₱247</h6>
                <h6 className="text-muted ml-2">
                  <del>₱250</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-evenly bg-light border">
            <button type="button" className="btn btn-success">Add Item</button>
            <button type="button" className="btn btn-danger">Delete</button>
            <button type="button" className="btn btn-warning">Edit</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center">
              <img className="img-fluid" src={Ginisa} alt="Ginisa Mix" />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Ginisa Mix</h6>
              <div className="d-flex justify-content-center">
                <h6>7</h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-evenly bg-light border">
            <button type="button" className="btn btn-success">Add Item</button>
            <button type="button" className="btn btn-danger">Delete</button>
            <button type="button" className="btn btn-warning">Edit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row pt-5">
        <div className="col">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center">
              <img
                style={{ height: 250 }}
                className="img-fluid"
                src={Youngstown}
                alt="Younstown Sardine"
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">
                Youngstown Sardine Original
              </h6>
              <div className="d-flex justify-content-center">
                <h6>₱28</h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-evenly bg-light border">
            <button type="button" className="btn btn-success">Add Item</button>
            <button type="button" className="btn btn-danger">Delete</button>
            <button type="button" className="btn btn-warning">Edit</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center">
              <img
                style={{ height: 250 }}
                className="img-fluid"
                src={Sting}
                alt="sting"
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">Sting</h6>
              <div className="d-flex justify-content-center">
                <h6>₱18</h6>
                <h6 className="text-muted ml-2">
                  <del>₱22</del>
                </h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-evenly bg-light border">
            <button type="button" className="btn btn-success">Add Item</button>
            <button type="button" className="btn btn-danger">Delete</button>
            <button type="button" className="btn btn-warning">Edit</button>
            </div>
          </div>
        </div>
      </div>

      {/* NEXT PAGE */}
      <div className="col-12 pb-1">
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center mb-3">
            <li className="page-item disabled">
              <a className="page-link" href="/" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="/">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProductDetails;
