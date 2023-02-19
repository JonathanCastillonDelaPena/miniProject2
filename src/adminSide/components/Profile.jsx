import React from "react";
import Sidebar from "./Sidebar";
import Chart from "./Chart";
import Calendar from "../components/Calendar";

const Profile = () => {
  return (
    <div>
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="pt-3 pb-2 mb-3 border-bottom border-dark">
          <h1 className="h2">Profile</h1>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col">
                <div className="d-flex flex-column align-items-center text-center ">
                  <img
                    alt="profpix"
                    className="rounded-circle mt-5"
                    width="150px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjv-LlSn3OR47vA5HF_uL2jN2ha-9ZymPMzA&usqp=CAU"
                  />
                  <button type="button" className="btn btn-light">
                    Upload
                  </button>
                  <span className="text-black-50">Reka Vicera</span>
                  <span> </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-2 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      value=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="surname"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="enter phone number"
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address Line 1</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 1"
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address Line 2</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Postcode</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="enter address line 2"
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Email </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter email id"
                      value=""
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="labels">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="country"
                      value=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">State/Region</label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="state"
                    />
                  </div>
                </div>
                <div className=" mt-3 text-center">
                  <button
                    className="btn btn-primary profile-button mr-5"
                    type="button"
                  >
                    Edit Profile
                  </button>
                  <button className="btn btn-primary profile-button" type="button">
                    Save Profile
                  </button>
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
export default Profile;
