import React from 'react'


function FeaturedSection(){
    return(
        <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
             
            >
            <h2 className="fa fa-check text-primary m-0 mr-3"> </h2>
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
             
            >
             <h2 className="fa fa-shipping-fast text-primary m-0 mr-2"> </h2>
              <h5 className="font-weight-semi-bold m-0">
                Free Shipping for every 500 worth of orders
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
             
            >
             <h2 className="fas fa-exchange-alt text-primary m-0 mr-3"> </h2>
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
             
            >
           <h2 className="fa fa-phone-volume text-primary m-0 mr-3"> </h2>
              <h5 className="font-weight-semi-bold m-0">12/7 Support</h5>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FeaturedSection;