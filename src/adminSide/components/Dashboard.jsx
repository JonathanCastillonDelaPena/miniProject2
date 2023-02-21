import React from "react";
import Sidebar from "./Sidebar";
import Chart from "./Chart";
import Calendar from "../components/Calendar";
import NavBar from "./NavBar";
import ProductDetails from "./Product Details";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="pt-3 pb-2 mb-3 border-bottom border-dark">
          <NavBar />
          <h1 className="h2">Dashboard</h1>
        </div>
        <div className="row">
          <div className="col-8">
            {" "}
            <ProductDetails />
          </div>
          <div className="col-4">
            {" "}
            <div className="main">
              <div className="chart">
                <Chart />
              </div>
              <div className="calendar">
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
