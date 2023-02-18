import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
        <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <a href="index.html" className="text-decoration-none">
            <h1 className="mb-4 display-5 font-weight-semi-bold">
                <span
                className="text-primary font-weight-bold border border-white px-3 mr-1"
                >VARATILYO</span
                >
            </h1>
            </a>
            <p>Happy Shopping!</p>
            <p className="mb-2">
            <i className="fa fa-map-marker-alt text-primary mr-3"></i>Carmona,
            Cavite
            </p>
            <p className="mb-2">
            <i className="fa fa-envelope text-primary mr-3"></i>info@varatilyo.com
            </p>
            <p className="mb-0">
            <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890
            </p>
        </div>
        <div className="col-lg-8 col-md-12">
            <div className="row">
            <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                <a className="text-dark mb-2" href="index.html"
                    ><i className="fa fa-angle-right mr-2"></i>Home</a
                >
                <a className="text-dark mb-2" href="shop.html"
                    ><i className="fa fa-angle-right mr-2"></i>Our Shop</a
                >
                <a className="text-dark mb-2" href="product-detail.html"
                    ><i className="fa fa-angle-right mr-2"></i>Product Detail</a
                >
                <a className="text-dark mb-2" href="cart.html"
                    ><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a
                >
                <a className="text-dark mb-2" href="checkout.html"
                    ><i className="fa fa-angle-right mr-2"></i>Checkout</a
                >
                <a className="text-dark" href="contact.html"
                    ><i className="fa fa-angle-right mr-2"></i>Contact Us</a
                >
                </div>
            </div>
            <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                <a className="text-dark mb-2" href="index.html"
                    ><i className="fa fa-angle-right mr-2"></i>Home</a
                >
                <a className="text-dark mb-2" href="shop.html"
                    ><i className="fa fa-angle-right mr-2"></i>Our Shop</a
                >
                <a className="text-dark mb-2" href="product-detail.html"
                    ><i className="fa fa-angle-right mr-2"></i>Product Detail</a
                >
                <a className="text-dark mb-2" href="cart.html"
                    ><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a
                >
                <a className="text-dark mb-2" href="checkout.html"
                    ><i className="fa fa-angle-right mr-2"></i>Checkout</a
                >
                <a className="text-dark" href="contact.html"
                    ><i className="fa fa-angle-right mr-2"></i>Contact Us</a
                >
                </div>
            </div>
            <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                <p>Subscribe to our Newsletter</p>
                <form action="">
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control border-0 py-4"
                    placeholder="Your Name"
                    required="required"
                    />
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    className="form-control border-0 py-4"
                    placeholder="Your Email"
                    required="required"
                    />
                </div>
                <div>
                    <button
                    className="btn btn-primary btn-block border-0 py-3"
                    type="submit"
                    >
                    Subscribe Now
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
        <div className="border-top border-light mx-xl-5 py-4 text-center">
        <p className="text-center text-dark">
            &copy;
            <a classNameName="font-weight-semi-bold" href="index.html">Varatilyo</a>. All
            Rights Reserved.
        </p>
        </div>
    </div>
  )
}

export default Footer