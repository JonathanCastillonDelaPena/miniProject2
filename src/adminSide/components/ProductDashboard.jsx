import React from "react";
import { useState, useEffect } from "react";
import ProductDataService from "../../dataServices/productDataService";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";

const ProductDashboard = () => {
  const [products, setProducts] = useState([]);
  const [modalData, setModalData] = useState({});

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

  const viewDetails = (product) => {
    setModalData(product);
  };

  useEffect(() => {
    retrieveProducts();
  }, []);

  if (products.length !== 0) {
    displayProducts = products.map((product) => (
      <tr
        data-bs-toggle="modal"
        data-bs-target="#productDetailsModal"
        onClick={() => viewDetails(product)}
        style={{ cursor: "pointer" }}
      >
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>Php{product.price}</td>
        <td>{product.discount}%</td>
        <td>{product.stock}</td>
      </tr>
    ));
  }

  return (
    <div>
      <div className="d-flex flex-row">
        <h2>Product Lists</h2>
        <button
          className="btn btn-success px-2 p-0 mb-2 ms-auto"
          data-bs-toggle="modal"
          data-bs-target="#addProductModal"
        >
          Add Product
        </button>
      </div>

      {/* Product Details Modal */}
      <>
        <div class="modal fade" id="productDetailsModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5">Product Details</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <ProductCard product={modalData} />
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Add Product Modal */}
      <>
        <div class="modal fade" id="addProductModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5">Add Product</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <ProductForm />
              </div>
            </div>
          </div>
        </div>
      </>

      <div className="table-responsive">
        <table className="table table-hover table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Discount</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>
          <tbody>{displayProducts}</tbody>
        </table>
      </div>
    </div>
  );
};
export default ProductDashboard;
