import React from "react";
import Sidebar from "../components/Sidebar";
import Chart from "../components/Chart";
import Calendar from "../components/Calendar";

const OrdersPage = () => {
  return (
    <div>
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="pt-3 pb-2 mb-3 border-bottom border-dark">
          <h1 className="h2">Order</h1>
        </div>
        <div className="row">
          <div className="col-8">
            <div class="table-responsive table-borderless mt-5 p-2">
              <table class="table">
                <thead>
                  <tr>
                    <th class="text-center">#</th>
                    <th>Order #</th>
                    <th>Company name</th>
                    <th>status</th>
                    <th>Total</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody class="table-body">
                  <tr class="cell-1">
                    <td class="text-center">1</td>
                    <td>#SO-13487</td>
                    <td>Gasper Antunes</td>
                    <td>
                      <span class="badge badge-success">Fullfilled</span>
                    </td>
                    <td>$2674.00</td>
                    <td>Today</td>
                  </tr>
                  <tr class="cell-1">
                    <td class="text-center">2</td>
                    <td>#SO-13453</td>
                    <td>Aartsen van</td>
                    <td>
                      <span class="badge badge-info">Confirmed</span>
                    </td>
                    <td>$3454.00</td>
                    <td>Yesterday</td>
                  </tr>
                  <tr class="cell-1">
                    <td class="text-center">3</td>
                    <td>#SO-13498</td>
                    <td>Trashes Habard</td>
                    <td>
                      <span class="badge badge-danger">Partially shipped</span>
                    </td>
                    <td>$6274.00</td>
                    <td>May 12,2020</td>
                  </tr>
                  <tr class="cell-1">
                    <td class="text-center">4</td>
                    <td>#SO-16499</td>
                    <td>Samban Hubart</td>
                    <td>
                      <span class="badge badge-success">Fullfilled</span>
                    </td>
                    <td>$6375.00</td>
                    <td>May 11,2020</td>
                  </tr>
                </tbody>
              </table>
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
export default OrdersPage;
