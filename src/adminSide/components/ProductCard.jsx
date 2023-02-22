import React from "react";

const ProductCard = ({ product }) => {
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
    <div className="card border-0 mb-4">
      <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 text-center">
        <img
          style={{ height: 200 }}
          className="img-fluid"
          src={product.imageLink}
          alt={product.name + " Image"}
        />
      </div>
      <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
        <h6 className="text-truncate mb-3">{product.name}</h6>
        <div className="d-flex justify-content-center">{displayPrice}</div>
      </div>
    </div>
  );
};

export default ProductCard;
