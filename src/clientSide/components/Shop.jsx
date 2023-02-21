import React from "react";
import { useState, useEffect } from "react";
import ProductDataService from "../dataServices/productDataService";

const Shop = () => {
  const [products, setProducts] = useState([]);
  let displayProducts = <></>;

  const retrieveProducts = () => {
    ProductDataService.getAll()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(`\n`);
        console.log(err);
        console.log(`\nFailed to get Products`);
      });
  };

  useEffect(() => {
    retrieveProducts();
  }, []);

  if (products.length !== 0) {
    displayProducts = products.map((product) => {
      let displayPrice = <h6>₱{product.price}</h6>;
      if (product.discount > 0) {
        const discountedPrice =
          product.price - product.price * (1 / product.discount);

        displayPrice = (
          <>
            <h6>₱{discountedPrice}</h6>
            <h6 className="text-muted ml-2">
              <del>₱{product.price}</del>
            </h6>
          </>
        );
      }

      return (
        <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center">
              <img
                style={{ height: 200 }}
                className="img-fluid"
                // src={img1}
                alt={product.name + " Image"}
              />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">{product.name}</h6>
              <div className="d-flex justify-content-center">
                {displayPrice}
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a href="#" className="btn btn-sm text-dark p-0">
                <i className="fas fa-eye text-primary mr-1"></i>View Detail
              </a>
              <a href="#" className="btn btn-sm text-dark p-0">
                <i className="fas fa-shopping-cart text-primary mr-1"></i>
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5">
        {/* <!-- Shop Sidebar Start --> */}
        <div className="col-lg-3 col-md-12">
          {/* <!-- Price --> */}
          <div className="border-bottom pb-4 price">
            <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
            <form>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked
                  id="price-all"
                />
                <label className="custom-control-label" for="price-all">
                  All Price
                </label>
                <span className="badge border font-weight-normal">1000</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-1"
                />
                <label className="custom-control-label" for="price-1">
                  ₱0 - ₱100
                </label>
                <span className="badge border font-weight-normal">150</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-2"
                />
                <label className="custom-control-label" for="price-2">
                  ₱101 -₱200
                </label>
                <span className="badge border font-weight-normal">295</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-3"
                />
                <label className="custom-control-label" for="price-3">
                  ₱201 - ₱300
                </label>
                <span className="badge border font-weight-normal">246</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-4"
                />
                <label className="custom-control-label" for="price-4">
                  ₱301 - ₱400
                </label>
                <span className="badge border font-weight-normal">145</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-5"
                />
                <label className="custom-control-label" for="price-5">
                  ₱401 - ₱500
                </label>
                <span className="badge border font-weight-normal">168</span>
              </div>
            </form>
          </div>
          {/* <!-- Price End --> */}
        </div>
        {/* <!-- Shop Sidebar End --> */}

        {/* <!-- Shop Product Start --> */}
        <div className="col-lg-9 col-md-12">
          <div className="row pb-3">
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
                    <a className="dropdown-item" href="#">
                      Latest
                    </a>
                    <a className="dropdown-item" href="#">
                      Popularity
                    </a>
                    <a className="dropdown-item" href="#">
                      Best Rating
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {displayProducts}

            <div className="col-12 pb-1">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center mb-3">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* <!-- Shop Product End --> */}
      </div>
    </div>
  );
};

export default Shop;
