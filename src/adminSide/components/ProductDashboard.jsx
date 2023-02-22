import React from "react";
import { useState, useEffect } from "react";
import ProductDataService from "../../dataServices/productDataService";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";

const ProductDashboard = () => {
  const [products, setProducts] = useState([]);
  const [modalData, setModalData] = useState({});
  const [modalEditData, setModalEditData] = useState({});

  let displayProducts = <></>;

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setModalEditData({ ...modalEditData, [name]: value });
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    ProductDataService.update(modalEditData._id, modalEditData).then(
      (response) => {
        alert(response.data.message);
        retrieveProducts();
      }
    );
  };

  const forwardModalDataToEdit = () => {
    setModalEditData(modalData);
  };

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

  const deleteProduct = (id) => {
    ProductDataService.remove(id).then((response) => {
      alert(response.data.message);
      retrieveProducts();
    });
  };

  const saveEdit = () => {};

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
              <div className="modal-footer d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={() => deleteProduct(modalData._id)}
                >
                  Delete
                </button>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#productFullDetailsModal"
                  type="button"
                  className="btn btn-info"
                >
                  Details
                </button>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#productDetailsEditModal"
                  type="button"
                  className="btn btn-warning"
                  onClick={forwardModalDataToEdit}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Full Product Details Modal */}
      <>
        <div class="modal fade" id="productFullDetailsModal">
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
                <div className="form-group">
                  <div className="form-floating">
                    <input
                      readOnly
                      type="text"
                      className="form-control"
                      value={modalData.name}
                    />
                    <label>Product Name</label>
                  </div>
                  <div className="form-floating">
                    <input
                      readOnly
                      type="text"
                      className="form-control"
                      value={modalData.price}
                    />
                    <label>Price (Php)</label>
                  </div>
                  <div className="form-floating">
                    <input
                      readOnly
                      type="text"
                      className="form-control"
                      value={modalData.discount}
                    />
                    <label>Discount (%)</label>
                  </div>
                  <div className="form-floating">
                    <input
                      readOnly
                      type="text"
                      className="form-control"
                      value={modalData.stock}
                    />
                    <label>Stock</label>
                  </div>
                  <div className="form-floating">
                    <input
                      readOnly
                      type="text"
                      className="form-control"
                      value={modalData.category}
                    />
                    <label>Category</label>
                  </div>
                  <div className="form-floating h-25">
                    <textarea
                      readOnly
                      type="text"
                      className="form-control"
                      value={modalData.description}
                    />
                    <label>Description</label>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#productDetailsModal"
                  type="button"
                  className="btn btn-secondary"
                >
                  Back
                </button>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#productDetailsEditModal"
                  type="button"
                  className="btn btn-warning"
                  onClick={forwardModalDataToEdit}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Edit Product Modal */}
      <>
        <div class="modal fade" id="productDetailsEditModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5">Edit Product Details</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form onSubmit={handleSubmitEdit} className="form-group">
                  <div className="form-floating">
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder=""
                      id="name"
                      name="name"
                      value={modalEditData.name}
                      onChange={handleEditInputChange}
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
                      value={modalEditData.price}
                      onChange={handleEditInputChange}
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
                      value={modalEditData.discount}
                      onChange={handleEditInputChange}
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
                      value={modalEditData.stock}
                      onChange={handleEditInputChange}
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
                      value={modalEditData.category}
                      onChange={handleEditInputChange}
                    />
                    <label>Category</label>
                  </div>
                  <div className="form-floating h-25">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder=""
                      id="description"
                      name="description"
                      value={modalEditData.description}
                      onChange={handleEditInputChange}
                    />
                    <label>Description</label>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <button
                      data-bs-dismiss="modal"
                      type="button"
                      className="btn btn-secondary"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-success">
                      Save
                    </button>
                  </div>
                </form>
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
                <ProductForm refreshProductDisplay={retrieveProducts} />
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
