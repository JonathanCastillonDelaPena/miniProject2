import React from "react";

const ProductForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div className="form-floating">
        <input required type="text" placeholder="" />
        <label>Product Name</label>
      </div>
    </form>
  );
};

export default ProductForm;
