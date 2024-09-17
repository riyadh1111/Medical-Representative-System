import React, { useState } from "react";
import { SiGmail } from "react-icons/si";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { BallTriangle, Circles, ColorRing, Hearts } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import { endpoint } from "../assets/api/endpoint";
import { apiHandler } from "../assets/api";
import {
  saveAuthToken,
  saveSuccessmsg,
} from "../store/store/Reducers/testSlice";
import { useDispatch } from "react-redux";
import Input from "./Input";


const Forgot = () => {
  const { authToken, success } = useSelector((state) => state.test);
  const dispatch = useDispatch();
  console.log("Token", authToken);
  console.log("Success msg", success);
  const navigate = useNavigate();
  const [userEmail, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);

  const validateForm = () => {
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.(com|in|co\.in|co)$/;
    if (!emailPattern.test(userEmail)) {
      setFlag(true);
      toast.error("Invalid email address");
      return false;
    }
    return true;
  };

  const ForgetSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const data = {
      email: userEmail,
    };
    const result = await apiHandler({
      url: endpoint.FORGET,
      method: "POST",
      data: data,
    });

    if (result.data) {
      navigate("/otp");
    } else {
      setLoading(false);
      toast.error("Submit failed");
    }

    console.log("Result", result && result.data.token);
  };

  return (
    <>
      <div className="Login-Page">
        <div className="d-flex align-items-center justify-content-center">
          <div class="card ">
            <div class="card-body  forgotCard">
              <div className="d-flex justify-content-center  gap-2">
                <div className="Login_Page-Logo">
                  <SiGmail color="#9868ff" className="logo" />
                </div>
                <div>
                  <h5 class="card-title Heading">Materio</h5>
                </div>
              </div>
              <p class="card-text mt-3">
                <h4 className="mb-1">Welcome to Materio! 👋🏻</h4>
              </p>
              <p>Please sign-in to your account and start the adventure</p>
              <div class="form-floating mb-3">
                {/* <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                /> */}
                {/* <label for="floatingInput">Email</label> */}
                <Input
                 flag={flag}
                 errormsg="invalid email address"
                 label="Email"
                 placeholder="Email"
                 type="email"
                 onchange={(e) => setEmail(e.target.value)}
                 value={userEmail}
                 />
              </div>
              <button
                class="btn btn-primary w-100 Login-Button mb-4"
                type="submit"
                onClick={() => ForgetSubmit()}
                
              >
                {" "}
                Send Reset Link{" "}
              </button>
              <div className="text-center">
                <a
                  className="d-flex forgotlink align-items-center justify-content-center"
                  onClick={() => navigate("/login")}
                >
                  <IoIosArrowBack />
                  Back to Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="d-flex loadericon justify-content-center align-items-center position-fixed top-0 ">
          <Circles color="black" height={60} width={60} />
        </div>
      ) : null}
      <div className="login-Page-Image">
        <div className="d-flex justify-content-between ps-5 pe-5 pb-5">
          <div className="left-Img">
            <img
              className="left-Imges"
              src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/tree-3.png"
              alt=""
            />
          </div>
          <div className="right-img">
            <img
              className=" right-Imges"
              src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/tree.png"
              alt=""
            />
          </div>
          <div className="buynow">
            <a
              href="https://themeselection.com/item/materio-dashboard-pro-bootstrap/"
              target="blank"
              className="btn btn-danger btn-buynow"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
