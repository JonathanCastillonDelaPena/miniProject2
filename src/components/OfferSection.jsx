import React from "react";

function OfferSection() {
  return (
      <div className="container-fluid offer pt-5">
        <div className="row">
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
              <div className="position-relative" style={{zIndex:1}}>
                <h5 className="text-uppercase text-primary mb-3">
                  10% off for first time shopper       
                </h5>
                <a
                  href="shop.html"
                  className="btn btn-outline-primary py-md-2 px-md-3"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
              <div className="position-relative" style={{zIndex:1}}>
                <h5 className="text-uppercase text-primary mb-3">
                  20% off for 1500 pesos worth of order
                </h5>
                <a
                  href="shop.html"
                  className="btn btn-outline-primary py-md-2 px-md-3"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}
export default OfferSection;
