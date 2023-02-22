import React from "react";
import { useState } from "react";
import ProductDataService from "../../dataServices/productDataService";

const ProductForm = ({ refreshProductDisplay }) => {
  const initialState = {
    name: "",
    price: 0,
    discount: 0,
    stock: 0,
    category: "",
    description: "",
  };
  const [product, setProduct] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const addProduct = () => {
    ProductDataService.create(product)
      .then((response) => {
        console.log(response.data);
        setProduct(initialState);
        refreshProductDisplay();
        alert("Product Added!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div className="form-floating">
        <input
          required
          type="text"
          className="form-control"
          placeholder=""
          id="name"
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />
        <label>Product Name</label>
      </div>
      <div className="form-floating">
        <input
          required
          type="number"
          min={0}
          className="form-control"
          placeholder=""
          id="price"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
        <label>Price</label>
      </div>
      <div className="form-floating">
        <input
          required
          type="number"
          min={0}
          className="form-control"
          placeholder=""
          id="discount"
          name="discount"
          value={product.discount}
          onChange={handleInputChange}
        />
        <label>Discount</label>
      </div>
      <div className="form-floating">
        <input
          required
          type="number"
          min={1}
          className="form-control"
          placeholder=""
          id="stock"
          name="stock"
          value={product.stock}
          onChange={handleInputChange}
        />
        <label>Stock</label>
      </div>
      <div className="form-floating">
        <input
          required
          type="text"
          className="form-control"
          placeholder=""
          id="category"
          name="category"
          value={product.category}
          onChange={handleInputChange}
        />
        <label>Category</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          placeholder=""
          id="description"
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
        <label>Description</label>
      </div>
      <div className="d-flex justify-content-between">
        <button type="reset" className="btn btn-secondary mt-3">
          Clear
        </button>
        <button type="submit" className="btn btn-success mt-3">
          Add
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
