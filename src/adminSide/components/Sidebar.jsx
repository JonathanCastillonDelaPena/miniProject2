import React from "react";

const Sidebar = () => {
  return (
    <div>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 " href="/">
          <h1 className=" font-weight-semi-bold">
            <span className="text-primary font-weight-bold border px-3 mr-1">
              VARATILYO
            </span>
          </h1>
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-light w-25 rounded-0 border-0"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-5 text-light" href="/">
              Sign out
            </a>
          </div>
        </div>
      </header>

      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-5 sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <span data-feather="home" className="align-text-bottom"></span>
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span data-feather="home" className="align-text-bottom"></span>
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span data-feather="file" className="align-text-bottom"></span>
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span
                  data-feather="shopping-cart"
                  className="align-text-bottom"
                ></span>
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span data-feather="users" className="align-text-bottom"></span>
                Customers
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Sidebar;