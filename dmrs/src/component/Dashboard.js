import React, { useState } from "react";
import "../assets/css/Dashboard.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Dashboard = (props) => {
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
  };

  const darkModeStyles = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    
  };

  return (
    <>
      <div className="mainclass" style={darkModeStyles}>
        <div className="d-flex justify-content-between mt-4">
          <div className="dashHeading">
            <h1 className="dashboard">Dashboard</h1>
          </div>
          <div className="searchSymptom">
            <div className="d-flex gap-4">
              <div className="input-group mb-4">
                <span className="input-group-text seactInput" id="basic-addon1">
                  <CiSearch />
                </span>
                <input
                  type="text"
                  className="form-control seachInput"
                  placeholder="Type Your Symptoms here"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row dashboardRow">
          <div className="col-6 dashCard1">
            <div className="d-flex justify-content-center">
              <div className="card UserCard text-center">
                <img
                  src="https://www.w3schools.com/css/img_avatar.png"
                  className="card-img-top dashUserImg mt-4"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title mb-4">User Profile</h5>
                  <div className="mb-3 row">
                    <label
                      htmlFor="disabledTextInput"
                      className="col-sm-2 col-form-label"
                    >
                      Name:
                    </label>
                    <div className="col-sm-10">
                      <input
                        className="form-control"
                        type="text"
                        value="Aastha"
                        aria-label="Disabled input example"
                        disabled
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="disabledTextInput"
                      className="col-sm-2 col-form-label"
                    >
                      City:
                    </label>
                    <div className="col-sm-10">
                      <input
                        className="form-control"
                        type="text"
                        value="Merrut"
                        aria-label="Disabled input example"
                        disabled
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="disabledTextInput"
                      className="col-sm-2 col-form-label"
                    >
                      Age:
                    </label>
                    <div className="col-sm-10">
                      <input
                        className="form-control"
                        type="text"
                        value="21"
                        aria-label="Disabled input example"
                        disabled
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="disabledTextInput"
                      className="col-sm-2 col-form-label"
                    >
                      Email:
                    </label>
                    <div className="col-sm-10">
                      <input
                        className="form-control"
                        type="text"
                        value="aastha@example.com"
                        aria-label="Disabled input example"
                        disabled
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="d-flex justify-content-center mt-4">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/listOfReview")}
              >
                Review
              </button>
            </span>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-center">
              <div className="card dashCard2">
                <div className="card-body medicinesList">
                  <h5 className="card-title text-center mb-4">List of Medicine</h5>
                  <div className="lists example">
                    <ul>
                      <li>Acetaminophen</li>
                      <li>Adderall</li>
                      <li>Cyclobenzaprine</li>
                      <li>Cymbalta</li>
                      <li>Doxycycline</li>
                      <li>Dupixent</li>
                      <li>Entresto</li>
                      <li>Entyvio</li>
                      <li>Farxiga</li>
                      <li>Gabapentin</li>
                      <li>Humira</li>
                      <li>Hydrochlorothiazide</li>
                      <li>Januvia</li>
                      <li>Keytruda</li>
                      <li>Lexapro</li>
                      <li>Lisinopril</li>
                      <li>Meloxicam</li>
                      <li>Naltrexone</li>
                      <li>Narcan</li>
                      <li>Omeprazole</li>
                      <li>Pantoprazole</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <span className="d-flex justify-content-center mt-4">
              <button className="btn btn-primary">New</button>
            </span>
          </div>
        </div>
        <div className="container darkMode d-flex justify-content-center mt-4">
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={50}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
