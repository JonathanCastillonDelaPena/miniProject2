import React from 'react'

function Top(){
    return(
        <div>
                  <div className="top row py-2 px-xl-5">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="d-inline-flex align-items-center">
            <a className="text-dark" href="#faq">
              FAQs
            </a>
            <span className="text-muted px-2">|</span>
            <a className="text-dark" href="#help">
              Help
            </a>
            <span className="text-muted px-2">|</span>
            <a className="text-dark" href="#support">
              Support
            </a>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <a className="text-dark px-2" href="#facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-dark px-2" href="#twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-dark px-2" href="#linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="text-dark px-2" href="#instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="text-dark pl-2" href="#youtube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="row align-items-center py-3 px-xl-5">
        <div className="col-lg-6 d-none d-lg-block">
          <a href="index.html" className="text-decoration-none">
            <h1 className="m-0 display-5 font-weight-semi-bold">
              <span className="text-primary font-weight-bold border px-3 mr-1">
                VARATILYO
              </span>
            </h1>
          </a>
        </div>
        <div className="col-lg-3 col-3 text-left">
          <form action="shop.html">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for products"
              />
              <div className="input-group-append">
                <span className="input-group-text bg-transparent text-primary">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-3 col-3 text-right">
          <a href="login" className="btn border">
            <i className="fas fa-user text-primary"></i>
            <span className="badge text-dark">0</span>
          </a>
          <a href="cart.html" className="btn border">
            <i className="fas fa-shopping-cart text-primary"></i>
            <span className="badge text-dark">0</span>
          </a>
        </div>
      </div>
        </div>
    );
}



export default Top;