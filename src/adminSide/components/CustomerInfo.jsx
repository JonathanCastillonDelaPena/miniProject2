import React from "react";
import Sidebar from "./Sidebar";
import Chart from "./Chart";
import Calendar from "../components/Calendar";

const CustomerInfo = () => {
  return (
    <div>
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="pt-3 pb-2 mb-3 border-bottom border-dark">
          <h1 className="h2">Customer Info</h1>
        </div>
        <div className="row">
          <div className="col-8">
            <div class="card">
              <div class="p-3 border-bottom d-flex align-items-center justify-content-center">
                <h5>Custom Order Request</h5>
              </div>

              <div class="p-3 px-4 py-4 border-bottom">
                <span class="font-weight-normal">Package Title</span>
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Descrption of Order"
                />
                <span class="font-weight-normal">Package Description</span>

                <div class="form">
                  <textarea
                    class="form-control mb-3 description-area"
                    placeholder="Update something about your package"
                  ></textarea>
                  <a href="/" class="">
                    <i class="fa fa-paperclip"></i>
                  </a>
                </div>

                <div class="d-flex flex-column">
                  <span class="font-weight-normal">Total</span>
                  <div class="d-flex justify-content-between align-items-center">
                    <input
                      type="text"
                      class="form-control price"
                      placeholder="$ XX"
                    />

                    <div class=" px-4">
                      <p class="mb-0">
                      Ready to ship!!!
                      </p>
                    </div>

                    <div class="button">
                      <button class="btn btn-danger send">PRINT</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
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
export default CustomerInfo;
